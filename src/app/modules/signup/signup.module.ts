import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from 'src/app/components/signup/signup.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SignupModule { }
