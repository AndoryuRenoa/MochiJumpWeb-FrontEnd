import { Component, OnInit, AfterViewInit } from '@angular/core';

import {ShowLoginService} from '../show-login.service';
import {ShowLogoutService} from '../show-logout.service';
import {UserInfoService} from '../user-info.service';
import {AuthenticateService} from'../authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {
  userName = "New User";

 constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService,
 private auth : AuthenticateService) { }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    console.log("Logout Component onInit "+this.userName);
  }
  ngAfterViewInit(){
    this.userName = this.auth.getUserName();
    console.log("Logout Component AfterViewInit "+this.userName);
  }

  logUserOut(){
    this.showLogout.changeShowStatus(false);
    this.showLoginService.changeShowStatus(true);

  }

}