import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
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
import { MessageSentComponent } from './contact/message-sent/message-sent.component';
import { UserComponent } from './user/user.component';
import { LoginFailureComponent } from './login-failure/login-failure.component';
import { UserPasswordComponent } from './user/user-password/user-password.component';
import { UserEmailComponent } from './user/user-email/user-email.component';
import { UserLevelsComponent } from './user/user-levels/user-levels.component';
import { GameDownloadComponent } from './game-download/game-download.component';
import { GameButtonComponent } from './main-menu/game-button/game-button.component';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'mainmenu', component: MainMenuComponent},
  {path: 'levelEditor', component: DrawLevelComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signUpComplete', component:SignUpCompleteComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'levelEditor', component: DrawLevelComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'messageSent', component: MessageSentComponent},
  {path: '',   redirectTo: '/mainmenu', pathMatch: 'full' },
  {path: 'userinfo', component: UserComponent},
  {path: 'loginFailure', component: LoginFailureComponent},
  {path: 'userPassword', component: UserPasswordComponent},
  {path: 'userEmail', component: UserEmailComponent },
  {path: 'userLevels', component: UserLevelsComponent},
  {path: 'download', component: GameDownloadComponent}
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
    MessageSentComponent,
    UserComponent,
    LoginFailureComponent,
    UserPasswordComponent,
    UserEmailComponent,
    UserLevelsComponent,
    GameDownloadComponent,
    GameButtonComponent,
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
