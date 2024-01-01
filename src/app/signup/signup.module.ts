import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterAsClientComponent } from './components/register-as-client/register-as-client.component';
import { RegisterAsVendorComponent } from './components/register-as-vendor/register-as-vendor.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterAsClientComponent, RegisterAsVendorComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class SignupModule {}
