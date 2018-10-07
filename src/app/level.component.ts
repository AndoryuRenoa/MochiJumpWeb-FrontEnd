import { Component, Input } from '@angular/core';

@Component({
  selector: 'level',
  templateUrl: '/level.component.html',
  styles: [`{ font-family: Lato; }`]
})

export class LevelComponent  {
  @Input() animal: string;
}