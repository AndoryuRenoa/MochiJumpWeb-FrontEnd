import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-button',
  templateUrl: './about-button.component.html',
  styleUrls: ['./about-button.component.css'],
  animations: [
  ]
})

export class AboutButtonComponent implements OnInit {
  state: string = 'none';
  isEnter: boolean =false;
  private counter: number = 1;

  constructor() {
   
   }

   ngOnInit(){

   }
  }
