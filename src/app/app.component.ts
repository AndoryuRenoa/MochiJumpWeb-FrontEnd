import { Component, Renderer2 } from '@angular/core';
import {ShowLoginService} from './show-login.service';
import {ShowLogoutService} from './show-logout.service';
import {SwitchToHdService} from './switch-to-hd.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mj-web-front-end';
  showAppLogin : boolean;
  showAppLogout: boolean;
  hd: boolean;
  hdStatus: String = "Change to HD";
  bgSource = "images/background.gif";
  cover = "cover";
  height ='100vh';
  zero='0';
  terms = ' no-repeat center center fixed';
  style = "{'background': 'url('images/background.gif') no-repeat center center fixed','background-size': 'cover', 'min-height': '100vh', 'margin': '0' }";


  constructor(private showLoginService: ShowLoginService, private showLogout: ShowLogoutService,
    private hdget: SwitchToHdService){

  }

  ngOnInit(){
    this.showLoginService.getStatus().subscribe(showAppLogin => this.showAppLogin = showAppLogin);
    this.showLoginService.changeShowStatus(true);
    this.showLogout.getStatus().subscribe(showAppLogout => this.showAppLogout = showAppLogout);
    this.showLogout.changeShowStatus(false);
    this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
    this.hdget.changeHDStatus(false);
  }

  changeHDStatus(){

    if (!this.hd){
      this.hdStatus = "Change to 8-bit Style";
      this.hdget.changeHDStatus(true);
      this.bgSource="images/skyhd.jpeg ) no-repeat center center fixed";
      this.cover = "cover";
      this.height ='100vh';
      this.zero='0';
      this.style="{'background': 'url('images/skyhd.jpeg') no-repeat center center fixed','background-size': 'cover', 'min-height': '100vh', 'margin': '0' }";
    }else {
      this.hdStatus = "Change to HD";
      this.hdget.changeHDStatus(false);
      this.bgSource = "images/background.gif ) no-repeat center center fixed";
      this.cover = "cover";
      this.height ='100vh';
      this.zero='0';
      this.style="{'background': 'url('images/background.gif') no-repeat center center fixed','background-size': 'cover', 'min-height': '100vh', 'margin': '0' }";
    }
  }


}


