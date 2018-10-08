import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tyler';
  animal = "your new cat";
  //testing
  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.http.get('http://mochijump.com/test/version').subscribe(data => {
      console.log(data);
    })

  }
}
