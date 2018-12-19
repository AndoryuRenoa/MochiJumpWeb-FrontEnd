import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  hd = true;

  constructor(private hdget: SwitchToHdService) { }

   ngOnInit(){
   this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
   this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }
}

