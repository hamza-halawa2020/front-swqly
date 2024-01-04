import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignServiceService {
  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient, private router: Router) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}login`, userData);
  }

  setToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  isAdmin() {
    return this.getToken();
  }
}
