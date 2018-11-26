import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';

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
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

   ngOnInit(){
   this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
   this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }
}
