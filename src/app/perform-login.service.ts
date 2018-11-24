import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Headers} from '@angular/http';

export interface LoginInfo {
  username : string;
  password : string;

}

@Injectable({
  providedIn: 'root'
})
export class PerformLoginService {

  loginURL = "/login";

  constructor(private http : HttpClient) { }

   //DEFUNCT CLASS SHOULD DELETE REPLACED BY AUTHENTICATE.SERVICE.TS

  postLogin(username : string, password : string){
   let headers = new HttpHeaders ({
      'Authorization': 'basic' +{username: username, password : password}, 
      'X-Requested-With': 'application/x-www-form-urlencoded'
    });

    let options =  {
      headers:headers

    };

    console.log("Hello!!!");
    console.log({username: username, password : password});
    console.log(this.loginURL, {username: username, password : password}, options);

    return this.http.post(this.loginURL, options).subscribe((res) =>
    console.log(JSON.stringify(res)));

  }
  
 
 /*
  let creds = btoa(username+":"+password);
  let basicHeader = "Basic "+ creds;
  let headers = new Headers ({
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Authorization' : basicHeader
});

  return this.http.post(this.loginURL, {headers: headers}).subscribe((res) => console.log(res));


  }
  */
}
