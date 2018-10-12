import { Injectable } from '@angular/core';
import {Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  private userNameStorage : string;
  private userName = new Subject<string>();

  constructor() { 

  }

  getUserNameNoSub(){
    return this.userNameStorage;
  }

  getUserNameSub(){
    console.log('name get ' + this.userName);
    return this.userName.asObservable();
  }

  setUserName( userName : string){
    this.userName.next(userName);
    this.userNameStorage = userName;
  }


}