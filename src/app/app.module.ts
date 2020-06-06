import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './components/converter/converter.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserListComponent } from './components/user-list/user-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    NavBarComponent,
    MainPageComponent,
    ContactPageComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
