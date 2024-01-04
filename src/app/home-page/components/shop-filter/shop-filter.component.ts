import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css']
})
export class ShopFilterComponent {
  @Input() shops!: any[];

  p: number = 1;
  collection: any[] = this.shops; 
  // totallength:number = this.shops.length;
  
}
