import { Component, OnInit, OnDestroy } from '@angular/core';
import { HelloComponent } from '../Hello.component';
import {ShowLoginService} from '../show-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy{

  signupComplete : boolean = false;

  constructor(private showLoginService: ShowLoginService) { }

  ngOnInit() {
   
  }

  revealLogin(){
    this.showLoginService.changeShowStatus(true);
  }

  ngOnDestroy(){
    if (!this.signupComplete){
      this.showLoginService.changeShowStatus(true);
    }

  }

}