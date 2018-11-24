import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subject } from "rxjs";
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GetDownloadUrlService {
  private apiURL = "/test/getDownloadLink"
  private javaURL = new Subject<String>();
  private exeURL = new Subject<String>();



  constructor(private http : HttpClient) { }

  getUrls(){
    this.http.get(this.apiURL,  {headers: new HttpHeaders()}).subscribe((data: Config)=>{
      this.setJavaURL(data['javaURL']);
      this.setExeURL(data['exeURL']);
    },
    error => {console.log(error);
    }
   );
  }


  setJavaURL (javaURL: String){
    this.javaURL.next(javaURL); 
  }
  setExeURL (exeURL: String){
    this.exeURL.next(exeURL); 
  }

  getJavaURL(){
    return this.javaURL.asObservable();
  }
  getExeURL(){
    return this.exeURL.asObservable();
  }
}
