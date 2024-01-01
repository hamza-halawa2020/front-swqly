import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  baseUrl: string = "http://localhost:8000/api/soqli";
  constructor(
    protected http: HttpClient
  ) { }

  getGovernorates(){
    return this.http.get(this.baseUrl + "/governorates")
  }

}
