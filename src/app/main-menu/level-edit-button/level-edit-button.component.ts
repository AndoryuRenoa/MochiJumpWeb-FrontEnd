import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';

@Component({
  selector: 'app-level-edit-button',
  templateUrl: './level-edit-button.component.html',
  styleUrls: ['./level-edit-button.component.css']
})
export class LevelEditButtonComponent implements OnInit {
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

  ngOnInit() {
    this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
    this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }

}
