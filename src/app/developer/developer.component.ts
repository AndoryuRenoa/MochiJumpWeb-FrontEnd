import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(idName: string):void {
    let element = document.getElementById(idName);
    
    element.scrollIntoView({ behavior: 'smooth'});
 }

}
