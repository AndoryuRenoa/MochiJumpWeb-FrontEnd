import { Injectable } from '@angular/core';
import {Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowLogoutService {
  private show = new Subject<boolean>();

  constructor() { 

  }

  getStatus(){
    return this.show.asObservable();
  }

  changeShowStatus( showAppLogout: boolean){
    this.show.next(showAppLogout);

  }


}