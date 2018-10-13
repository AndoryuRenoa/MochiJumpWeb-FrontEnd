import { Component } from '@angular/core';
import {ShowLoginService} from './show-login.service';
import {ShowLogoutService} from './show-logout.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mj-web-front-end';
  showAppLogin : boolean;
  showAppLogout: boolean;



  constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService){

  }

  ngOnInit(){
    this.showLoginService.getStatus().subscribe(showAppLogin => this.showAppLogin = showAppLogin);
    this.showLoginService.changeShowStatus(true);
    this.showLogout.getStatus().subscribe(showAppLogout => this.showAppLogout = showAppLogout);
    this.showLogout.changeShowStatus(false);
  }



}