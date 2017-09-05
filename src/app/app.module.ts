import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OffersComponent } from './components/offers/offers.component';

import { FoodService } from './services/food.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    MenuComponent,
    NavBarComponent,
    OffersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : 'home',component : HomepageComponent },
      { path : 'register',component : RegisterComponent },
      { path : 'login',component : LoginComponent },
      { path : 'offers',component : OffersComponent }
    ])
     
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})

export class AppModule { }
