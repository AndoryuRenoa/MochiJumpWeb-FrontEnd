import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { GetDownloadUrlService} from '../get-download-url.service';

@Component({
  selector: 'app-game-download',
  templateUrl: './game-download.component.html',
  styleUrls: ['./game-download.component.css']
})
export class GameDownloadComponent implements OnInit {
  private loggedIn : boolean = false;
  private jarURL: String;
  private exeURL: String;

  constructor(private auth: AuthenticateService, private getURL: GetDownloadUrlService) { }

  ngOnInit() {
    this.loggedIn = this.auth.getLoggedInStatus();
    if (this.loggedIn){
      this.getURL.getJavaURL().subscribe(javaURL => this.jarURL = javaURL);
      this.getURL.getExeURL().subscribe(exeURL => this.exeURL = exeURL);
      this.getURL.getUrls();
    }
  }

}
