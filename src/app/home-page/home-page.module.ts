import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './components/slide/slide.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ShopFilterComponent } from './components/shop-filter/shop-filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    SlideComponent,
    CardComponent,
    HomePageComponent,
    ShopFilterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class HomePageModule { }
