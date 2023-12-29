import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign/components/sign-in/sign-in.component';
import { SignUpComponent } from './signup/components/sign-up/sign-up.component';
import { RegisterAsClientComponent } from './signup/components/register-as-client/register-as-client.component';
import { RegisterAsVendorComponent } from './signup/components/register-as-vendor/register-as-vendor.component';

const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'register-client',
    component: RegisterAsClientComponent,
  },
  {
    path: 'register-vendor',
    component: RegisterAsVendorComponent,
  },
  {
    path: 'joinas',
    component: SignUpComponent,
  },
  // {
  //   path: 'test',
  //   component: SlideComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
