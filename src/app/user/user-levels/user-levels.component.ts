import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-levels',
  templateUrl: './user-levels.component.html',
  styleUrls: ['./user-levels.component.css']
})
export class UserLevelsComponent implements OnInit {
  private levelExist :boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
