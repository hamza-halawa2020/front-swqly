import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../sharedService/counter.service';
import { SignServiceService } from 'src/app/sign/signService/sign-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  counter: number = 0;

  constructor(
    private counterService: CounterService, 
    private authService: SignServiceService
    ) {}

  ngOnInit(): void {
    this.counter = this.counterService.getCount();
  }

  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}

