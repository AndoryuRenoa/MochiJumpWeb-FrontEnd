import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../switch-to-hd.service';

@Component({
  selector: 'app-mochi-face',
  templateUrl: './mochi-face.component.html',
  styleUrls: ['./mochi-face.component.css']
})
export class MochiFaceComponent implements OnInit {
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

  ngOnInit() {
   this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
   this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }

}
