import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../sharedService/counter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  counter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter = this.counterService.getCount();
  }

 
}

