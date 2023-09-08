import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  
  private baseUrl = 'http://localhost:8081/api/uploadImage'; // l'URL  backend

  constructor(private http: HttpClient) { }

  publish(data: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, data);
  }
}
