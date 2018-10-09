import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-edit-button',
  
  templateUrl: './level-edit-button.component.html',
  
  styleUrls: ['./level-edit-button.component.css']
})
export class LevelEditButtonComponent implements OnInit {

  // need to have test for whether or not browser is desktop 
  // if not desktop html /css needs to be changed

  constructor() { }

  ngOnInit() {
  }

}