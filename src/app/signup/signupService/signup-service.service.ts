import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupServiceService {
  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}
  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}soqli/users`, userData);
  }

  getGovernorates() {
    return this.http.get(`${this.apiUrl}soqli/governorates`);
  }
  // getcities() {
  //   return this.http.get(`${this.apiUrl}soqli/governorates`);
  // }
}
