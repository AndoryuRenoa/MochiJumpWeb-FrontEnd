import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DrawLevelComponent } from './draw-level/draw-level.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MochiFaceComponent } from './mochi-face/mochi-face.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutButtonComponent } from './main-menu/about-button/about-button.component';
import { LevelEditButtonComponent } from './main-menu/level-edit-button/level-edit-button.component';
import { SignUpCompleteComponent } from './sign-up/sign-up-complete/sign-up-complete.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ContactButtonComponent } from './main-menu/contact-button/contact-button.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'mainmenu', component: MainMenuComponent},
  {path: 'levelEditor', component: DrawLevelComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signUpComplete', component:SignUpCompleteComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'levelEditor', component: DrawLevelComponent},
  {path: 'contact', component: ContactComponent},
  {path: '',   redirectTo: '/mainmenu', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DrawLevelComponent,
    LoginComponent,
    LogoutComponent,
    MainMenuComponent,
    MochiFaceComponent,
    SignUpComponent,
    AboutButtonComponent,
    LevelEditButtonComponent,
    SignUpCompleteComponent,
    LoginPageComponent,
    ContactButtonComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
