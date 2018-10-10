import { Component, OnInit } from '@angular/core';
import { HelloComponent } from '../Hello.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  destroyThis(){
    name= "Change!"
  }

}