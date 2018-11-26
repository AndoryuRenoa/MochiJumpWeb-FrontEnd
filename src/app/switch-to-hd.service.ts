import { Injectable } from '@angular/core';
import {Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SwitchToHdService {
  private hd = new Subject<boolean>();
  private hdb: boolean;


  constructor() { }

  getHDStatus(){
    return this.hd.asObservable();
  }
  getBoolean(){
    return this.hdb;
  }

  changeHDStatus( hd: boolean){
    this.hd.next(hd);
    this.hdb = hd;

  }


}
