import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-about-button',
  templateUrl: './about-button.component.html',
  styleUrls: ['./about-button.component.css'],
  animations: [
    trigger ('startAnimation', [
      state('loop1', style({})),
      state('loop2', style({})),
      transition('loop1 => loop2', animate(100)),
      transition('loop2 => loop1', animate(100)),
  ]),
  ]
})

export class AboutButtonComponent implements OnInit {
  state: string = 'none';
  isEnter: boolean =false;
  private counter: number = 1;

  constructor() {
    this.visibility ={'visibility' : 'hidden'}
    this.selectorSRC = "https://github.com/AndoryuRenoa/MochiJumpWeb-Backend/blob/master/MochiJumpLevelEditor2/src/main/resources/static/images/bone1M.png?raw=true";
   }

   onMouseEnter(){
     this.visibility ={'visibility' : 'visible'}
     this.state = 'loop1';
     this.isEnter = true;
   }
   onMouseLeave(){
     this.visibility ={'visibility' : 'hidden'}
     this.state = 'loop2';
     this.isEnter = false;
   }

   onEnd(event){
    if (this.isEnter){
      if (event.toState === 'loop1'){
        this.onAnimate();
        this.state = "loop2";
        console.log(this.counter);
      } else{
        this.onAnimate();
        this.state = "loop1";
      }
    }
   }

   onAnimate(){
      if (this.counter==1){
       this.selectorSRC = "https://github.com/AndoryuRenoa/MochiJumpWeb-Backend/blob/master/MochiJumpLevelEditor2/src/main/resources/static/images/bone1M.png?raw=true";
       this.counter ++; 

     }else if (this.counter==2){
       this.selectorSRC = "https://github.com/AndoryuRenoa/MochiJumpWeb-Backend/blob/master/MochiJumpLevelEditor2/src/main/resources/static/images/bone2M.png?raw=true";
       this.counter ++;
     }else if (this.counter==3){
       this.selectorSRC = "https://github.com/AndoryuRenoa/MochiJumpWeb-Backend/blob/master/MochiJumpLevelEditor2/src/main/resources/static/images/bone3M.png?raw=true";
       this.counter ++; 
     }else if (this.counter==4){
       this.selectorSRC = "https://github.com/AndoryuRenoa/MochiJumpWeb-Backend/blob/master/MochiJumpLevelEditor2/src/main/resources/static/images/bone4M.png?raw=true";
       this.counter =1;
     }
   }


  ngOnInit() {
  }

}