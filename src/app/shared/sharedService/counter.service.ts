import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counters = { value: 0 };

  constructor() {}

  getCount(): number {
    return this.counters.value;
  }

  incrementCount(): void {
    this.counters.value++;
    console.log(this.getCount());
  }

  decrementCount(): void {
    if (this.counters.value > 0) {
      this.counters.value--;
    }
    console.log(this.getCount());
  }
}