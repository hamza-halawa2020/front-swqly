import { Component } from '@angular/core';
import { SignServiceService } from 'src/app/sign/signService/sign-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private authService: SignServiceService) {}

  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
