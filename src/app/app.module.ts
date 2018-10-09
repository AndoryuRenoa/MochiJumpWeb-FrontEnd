import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DrawLevelComponent } from './draw-level/draw-level.component';
import { CanvasComponent } from './draw-level/canvas/canvas.component';
import { DrawLevelMenuComponent } from './draw-level/draw-level-menu/draw-level-menu.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, MainMenuComponent, DrawLevelComponent, CanvasComponent, DrawLevelMenuComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
