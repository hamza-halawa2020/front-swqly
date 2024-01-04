import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignServiceService } from '../sign/signService/sign-service.service';

@Injectable({
  providedIn: 'root',
})
export class unauthGuard implements CanActivate {
  constructor(private auth: SignServiceService, private router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
