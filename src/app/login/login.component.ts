import { Component, OnInit } from '@angular/core';
import {ShowLoginService} from '../show-login.service';
import {ShowLogoutService} from '../show-logout.service';
import {PerformLoginService} from '../perform-login.service';
import {AuthenticateService} from'../authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};


  constructor(private showLoginService: ShowLoginService,
     private peformLogin : PerformLoginService, private authenticate: AuthenticateService,
     private router : Router, private showLogout: ShowLogoutService  ) { }

  ngOnInit() {
    
  }

  hideMe(){
    this.showLoginService.changeShowStatus(false);
  }

  attemptLogin(username : string, password: string){
    this.authenticate.authenticate(this.credentials, 
      response=>{
      console.log("Welcome "+ response+" from login component");
      this.showLoginService.changeShowStatus(false);
      this.showLogout.changeShowStatus(true);
      this.router.navigateByUrl('/');
      });
        return false;
  }

  doNothing(){

  }

}