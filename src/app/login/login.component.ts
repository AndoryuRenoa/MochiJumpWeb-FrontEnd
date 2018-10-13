import { Component, OnInit } from '@angular/core';
import {ShowLoginService} from '../show-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private showLoginService: ShowLoginService) { }

  ngOnInit() {
    
  }

  hideMe(){
    this.showLoginService.changeShowStatus(false);
  }

  attemptLogin(userName : String, password:String){
    if(confirm("This isn't live and will currently only show you the username and password \nHit ok to confirm or cancel to stop"))
    alert("Okay, inputed \nUser Name: "+ userName+
    "\nPassword: "+ password)
  }

}