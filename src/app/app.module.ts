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
import { MochiFaceComponent } from './mochi-face/mochi-face.component';
import { LevelEditButtonComponent } from './main-menu/level-edit-button/level-edit-button.component';
import { AboutButtonComponent } from './main-menu/about-button/about-button.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {path: 'mainmenu', component: MainMenuComponent},
  { path: '',   redirectTo: '/mainmenu', pathMatch: 'full' }
];

@NgModule({
    

  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
 ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, MainMenuComponent, DrawLevelComponent, CanvasComponent, DrawLevelMenuComponent, AboutComponent, MochiFaceComponent, LevelEditButtonComponent, AboutButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
