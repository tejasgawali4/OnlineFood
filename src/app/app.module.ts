import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    MenuComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'home',component : HomepageComponent },
      { path : 'register',component : RegisterComponent },
      { path : 'login',component : LoginComponent }
    ])
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
