import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SignServiceService {
  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}login`, userData, {
      withCredentials: true,
    });
  }

  setTokenInCookie(token: string) {
    // this.cookieService.set('auth_token', token);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    const expirationDateString = expirationDate.toUTCString();
    this.cookieService.set(
      'auth_token',
      token,
      undefined,
      undefined,
      undefined,
      true,
      'Strict'
    );
  }

  getTokenFromCookie(): string {
    return this.cookieService.get('auth_token');
  }

  // setToken(tokenValue: string) {
  //   localStorage.setItem('token', tokenValue);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  isLoggedIn() {
    return this.getTokenFromCookie();
  }

  logout() {
    // localStorage.clear();
    this.cookieService.delete('auth_token');
    this.router.navigate(['']);
  }

  isAdmin() {
    return this.getTokenFromCookie();
  }
}
