import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from '../signup/components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
})
export class SignModule {}
