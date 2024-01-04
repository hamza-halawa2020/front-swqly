import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign/components/sign-in/sign-in.component';
import { SignUpComponent } from './signup/components/sign-up/sign-up.component';
import { RegisterAsClientComponent } from './signup/components/register-as-client/register-as-client.component';
import { RegisterAsVendorComponent } from './signup/components/register-as-vendor/register-as-vendor.component';
import { SlideComponent } from './home-page/components/slide/slide.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ShopDetailModule } from './shop-detail/shop-detail.module';
import { ShopDetailsComponent } from './shop-detail/components/shop-details/shop-details.component';
import { ProductDetailsComponent } from './product-details/components/product-details/product-details.component';
import { HomePageComponent } from './home-page/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
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
  {
    path: 'shop-details/:slug',
    component: ShopDetailsComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
