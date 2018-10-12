import { Component, OnInit } from '@angular/core';
import { HelloComponent } from '../Hello.component';
import {ShowLoginService} from '../show-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showAppLogin;

  constructor(private showLoginService: ShowLoginService) { }

  ngOnInit() {
    
  }

  hideMe(){
    this.showLoginService.changeShowStatus(false);
    console.log("hideMe fired");
  }

}