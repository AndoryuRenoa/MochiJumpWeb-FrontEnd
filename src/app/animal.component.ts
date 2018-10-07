import { Component, Input } from '@angular/core';

@Component({
  selector: 'animal',
  template: `<h1>I like {{animal}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})

export class AnimalComponent  {
  @Input() animal: string;
}