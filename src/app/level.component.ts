import { Component, OnInit } from '@angular/core';
import {LevelListService} from '../level-list-service.service';

@Component({
  selector: 'level',
  templateUrl: '/level.component.html',
  styles: [`{ font-family: Lato; }`]
})

export class LevelComponent  {
  levels = level[];

  constructor (private levelListService : LevelListService){};

  ngOnInit(): void{
    this.getLevels();
  }

  getLevels(){
    this.levelListService.getConfig()
    .subscribe( levels => this.levels=levels);
  }
}