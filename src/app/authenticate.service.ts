import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ShowLoginService} from './show-login.service';
import {ShowLogoutService} from './show-logout.service';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
   private userFirstName: string;
   private userInfo = {userFirstName: '', userName: '', emailAddress: '', password: ''}

  authenticated = false;

  constructor(private http: HttpClient, private showLoginService: ShowLoginService, private showLogout: ShowLogoutService ) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password), 
        } : {});

        

        this.http.get('/test/user', {headers: headers}).subscribe((data: Config) => {
            this.userInfo = {
                userFirstName: data['userFirstName'], 
                userName: data['userName'], 
                emailAddress: data['emailAddress'], 
                password: data['password']
            } 
            this.showLoginService.changeShowStatus(false);
            this.showLogout.changeShowStatus(true);
                console.log(data);
            if (data['emailAddress'].length>3) {
                this.authenticated = true;    
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

    getUserName(){
        return this.userInfo.userFirstName
    }

    getEmailAddress(){
        return this.userInfo.emailAddress;
    }

    getLoggedInStatus(){
        return this.authenticated
    }

}
