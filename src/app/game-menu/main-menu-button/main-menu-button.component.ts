import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';

@Component({
  selector: 'app-main-menu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrls: ['./main-menu-button.component.css']
})
export class MainMenuButtonComponent implements OnInit {
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

   ngOnInit(){
   this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
   this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }

}
