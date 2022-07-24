import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupModule } from './modules/signup/signup.module';
import { UserHomepageModule } from './modules/user-homepage/user-homepage.module';
import { AdminHomepageModule } from './modules/admin-homepage/admin-homepage.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignupModule,
    UserHomepageModule,
    AdminHomepageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
