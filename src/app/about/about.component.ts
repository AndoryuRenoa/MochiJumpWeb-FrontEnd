import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  hd= true;
  
  constructor() { }

  ngOnInit() {
  }

  scrollTo(idName: string):void {
    let element = document.getElementById(idName);
    
    element.scrollIntoView({ behavior: 'smooth'});
 }

}
