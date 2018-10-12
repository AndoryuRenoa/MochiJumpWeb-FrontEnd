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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ShowLoginService } from './show-login.service';
import { LogoutComponent } from './logout/logout.component';
import { ShowLogoutService } from './show-logout.service';
import { SignUpCompleteComponent } from './sign-up/sign-up-complete/sign-up-complete.component';
import { UserInfoService } from './user-info.service';



const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  {path: 'mainmenu', component: MainMenuComponent},
  {path: 'levelEditor', component: DrawLevelComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signUpComplete', component:SignUpCompleteComponent},
  {path: '',   redirectTo: '/mainmenu', pathMatch: 'full' }
];

@NgModule({
  
    

  imports:    [ BrowserModule, BrowserAnimationsModule, FormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
 ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, MainMenuComponent, DrawLevelComponent, CanvasComponent, DrawLevelMenuComponent, AboutComponent, MochiFaceComponent, LevelEditButtonComponent, AboutButtonComponent, SignUpComponent, LogoutComponent, SignUpCompleteComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ShowLoginService, ShowLogoutService, UserInfoService]
})
export class AppModule { }
