import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';

@Component({
  selector: 'app-developer-button',
  templateUrl: './developer-button.component.html',
  styleUrls: ['./developer-button.component.css']
})
export class DeveloperButtonComponent implements OnInit {
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

  ngOnInit(){
    this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
    this.hdget.changeHDStatus(this.hdget.getBoolean()); 
   }
}
