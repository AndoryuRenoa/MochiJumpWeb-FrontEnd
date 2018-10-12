import { Injectable } from '@angular/core';


import {Subject } from "rxjs";
import {LoginComponent} from './login/login.component';

@Injectable({
  providedIn: 'root',
})
export class ShowLoginService {

  private show = new Subject<boolean>();

  constructor() { 

  }

  getStatus(){
    return this.show.asObservable();
  }

  changeShowStatus( showAppLogin: boolean){
    this.show.next(showAppLogin);

  }


}