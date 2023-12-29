import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  accountType: string = '';

  getRouterLink() {
    if (this.accountType === 'client') {
      return '/register-client';
    } else if (this.accountType === 'Partener') {
      return '/register-vendor';
    }

    return '';
  }
}
