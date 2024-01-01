import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ShopDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ShopDetailModule { }
