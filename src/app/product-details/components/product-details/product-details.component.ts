import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CounterService } from 'src/app/shared/sharedService/counter.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {
  counter: number = 0
  cartItems = [
    { id: 'item1', name: 'Item 1' },
    { id: 'item2', name: 'Item 2' },
  ];

  constructor(public counterService: CounterService) {}

  incrementItem(): void {
    this.counterService.incrementCount();
    this.counter = this.counterService.getCount()
  }

  decrementItem(): void {
    this.counterService.decrementCount();
    if(this.counter > 0) 
    this.counter = this.counterService.getCount()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.incrementItem()
    this.decrementItem()
  }
  
}
