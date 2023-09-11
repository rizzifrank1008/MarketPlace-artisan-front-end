import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetImageService {

  private baseUrl = 'http://localhost:8081/api/v1/getImage/'; // l'URL  backend
   
  constructor(private http: HttpClient) { }
  

  getImage(id: number): Observable<any> {
    const url = `${this.baseUrl}{id}`;
    return this.http.get(url);
  }
}
