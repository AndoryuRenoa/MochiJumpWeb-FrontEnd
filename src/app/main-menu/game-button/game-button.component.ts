import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';
@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})
export class GameButtonComponent implements OnInit {
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

  ngOnInit() {
    this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
   this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }

}
