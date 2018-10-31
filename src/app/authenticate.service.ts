import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ShowLoginService} from './show-login.service';
import {ShowLogoutService} from './show-logout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
   private userFirstName: string;

  authenticated = false;

  constructor(private http: HttpClient, private showLoginService: ShowLoginService, private showLogout: ShowLogoutService ) {
  }

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password), 
        } : {});

        

        this.http.get('/test/user', {headers: headers, responseType: 'text' as 'text'}).subscribe(response => {
                this.userFirstName = response; 
                this.showLoginService.changeShowStatus(false);
                this.showLogout.changeShowStatus(true);
                console.log("Welcome "+ response);
            if (response.length>0) {
                this.authenticated = true;    
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

    getUserName(){
        return this.userFirstName
    }

}
