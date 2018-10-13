import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelloComponent } from '../Hello.component';
import {ShowLoginService} from '../show-login.service';
import {ShowLogoutService} from '../show-logout.service';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy{

  signupComplete : boolean = false;

  constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService, private router: Router,
  private userInfo: UserInfoService) { }

  ngOnInit() {
   
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