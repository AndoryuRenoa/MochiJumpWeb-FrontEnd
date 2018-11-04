import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service'; //this or authenticate
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MessangerService} from '../messanger.service';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private loggedIn : boolean = false;
  private submitted: boolean = false;

  messageFormNotLoggedIn: FormGroup;
  messageFormLoggedIn: FormGroup;

  messageInfo = {subject: '', email: '', messageBody: ''};

  constructor(private messangerService : MessangerService, private formBuilder: FormBuilder,
    private auth: AuthenticateService) { }

  ngOnInit() {
    this.messageFormNotLoggedIn = this.formBuilder.group({
      subject: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      messageBody: ['', [Validators.required]],
      });
    this.messageFormLoggedIn = this.formBuilder.group({
      subject: ['', Validators.required],
      messageBody: ['', [Validators.required]]
    })
    //this.loggedIn = this.auth.getLoggedInStatus();
    this.loggedIn = false;
    console.log(this.loggedIn)
  }

  get fnli(){ return this.messageFormNotLoggedIn.controls}

  get fli(){ return this.messageFormLoggedIn.controls}

  sendMessage(){
    this.submitted = true;

  }

}
