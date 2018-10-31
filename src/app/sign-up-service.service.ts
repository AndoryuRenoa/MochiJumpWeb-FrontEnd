import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {
  signupURL = "/test/newUserCreation"
  private nameTaken = new Subject<boolean>();



  constructor(private http : HttpClient, private router: Router) { }

  attemptSignUP(userTemplate, callback){

    this.http.post(this.signupURL, userTemplate, {headers: new HttpHeaders(), responseType: 'text' as 'text'})
    .subscribe((res) =>{
    console.log(JSON.stringify(res));
    if (res == "Name Taken"){
      this.setNameTaken(true);
    } else{
      this.router.navigate(['/signUpComplete']);
    }
    });

    return callback && callback();

  }

  setNameTaken (isNameTaken: boolean){
    this.nameTaken.next(isNameTaken);
  }

  getNameTaken(){
    return this.nameTaken.asObservable();
  }


}
