import { Component, OnInit } from '@angular/core';
import {SwitchToHdService} from '../../switch-to-hd.service';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.css']
})
export class ContactButtonComponent implements OnInit {
  hd= true;

  constructor(private hdget: SwitchToHdService) { }

  ngOnInit() {
    this.hdget.getHDStatus().subscribe(hd => this.hd =hd);
   this.hdget.changeHDStatus(this.hdget.getBoolean()); 
  }

}
