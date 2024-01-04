import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  baseUrl: string = "http://localhost:8000/api/soqli";
  constructor(
    protected http: HttpClient
  ) { }

  get(path: string, body: string): Observable<any> {
    // Use the body in the HTTP request as a query parameter
    return this.http.get(this.baseUrl + path, { params: { category: body } });
  }

}
