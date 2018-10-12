import { Component, OnInit, AfterViewInit } from '@angular/core';

import {ShowLoginService} from '../show-login.service';
import {ShowLogoutService} from '../show-logout.service';
import {UserInfoService} from '../user-info.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AfterViewInit {
  userName = "New User";

 constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService,
 private userInfo: UserInfoService) { }

  ngOnInit() {
    this.userName = this.userInfo.getUserNameNoSub();
  }
  ngAfterViewInit(){
    
  }

  logUserOut(){
    this.showLogout.changeShowStatus(false);
    this.showLoginService.changeShowStatus(true);

  }

}