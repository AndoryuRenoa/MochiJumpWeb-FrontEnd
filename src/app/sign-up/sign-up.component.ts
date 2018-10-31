import { Component, OnInit, OnDestroy } from '@angular/core';
import {ShowLoginService} from '../show-login.service';
import {ShowLogoutService} from '../show-logout.service';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';
import {SignUpServiceService} from '../sign-up-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators,RxFormBuilder } from "@rxweb/reactive-form-validators"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy{
  registerForm: FormGroup;
  submitted :boolean = false;
  passwordNotSame :boolean = true;
  nameTaken: boolean = false;

  newUserTemplate = {userFirstName: '', userName: '', emailAddress:'', password: ''};

  signupComplete : boolean = false;

  constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService, private router: Router,
  private userInfo: UserInfoService, private signUp: SignUpServiceService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userFirstName: ['', Validators.required],
      userName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', RxwebValidators.compare({fieldName: 'password'})]
    });

    this.signUp.getNameTaken().subscribe(res => this.nameTaken = res);
  }

  checkPasswords (group: FormGroup){
    let password = this.f.password.value;
    let password2 = this.f.password2.value;

    if (password == password2){
      return this.passwordNotSame = false;
    } 

  }

  get f(){ return this.registerForm.controls}

  signup(){
    this.submitted=true;
    let response: string = null;

    this.newUserTemplate = { 
      userFirstName: this.f.userFirstName.value, 
      userName: this.f.userName.value, 
      emailAddress: this.f.emailAddress.value, 
      password: this.f.password.value
    };

    if (this.registerForm.invalid){
      return
    }

     response =this.signUp.attemptSignUP(this.newUserTemplate, (res)=>{
    });

  }

  saveName(userName :string){
    this.userInfo.setUserName(userName);
    this.signUpCompleted();
  }

  signUpCompleted(){
    this.signupComplete = true;
    console.log("signup button pressed");
    this.showLoginService.changeShowStatus(false);
    this.showLogout.changeShowStatus(true);
    this.router.navigate(['/signUpComplete']);
  }

  ngOnDestroy(){
    if (this.signupComplete === false){
      this.showLoginService.changeShowStatus(true);
    } else{

    }

  }

}