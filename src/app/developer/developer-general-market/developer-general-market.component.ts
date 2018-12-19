import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer-general-market',
  templateUrl: './developer-general-market.component.html',
  styleUrls: ['./developer-general-market.component.css']
})
export class DeveloperGeneralMarketComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(idName: string):void {
    let element = document.getElementById(idName);
    
    element.scrollIntoView({ behavior: 'smooth'});
 }

}
