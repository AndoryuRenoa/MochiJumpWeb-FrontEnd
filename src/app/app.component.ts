import { Component } from '@angular/core';
import {ShowLoginService} from './show-login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Being Fed from AppComponent';
  showAppLogin : boolean;

  constructor(private showLoginService: ShowLoginService){

  }

  ngOnInit(){
    this.showLoginService.getStatus().subscribe(showAppLogin => this.showAppLogin = showAppLogin);
    this.showLoginService.changeShowStatus(true);
  }



}
