import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Response{
  userId: number, 
  id: number, 
  title: string, 
  completed: boolean
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  animal = "your new cat";
  name;
  //testing
  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.http.get<Response>('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      console.log(data);
      this.name = data.title;
      console.log(data.title);
      this.animal = data.completed;

    })

  }
}
