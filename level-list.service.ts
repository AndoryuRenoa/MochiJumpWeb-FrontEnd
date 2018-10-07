import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LevelListService {
  constructor(private http: HttpClient) { }

  configURL = "http://mochijump.com/test/returnAll";

  getConfig(){
    return this.http.get(this.configURL);
  }
}
