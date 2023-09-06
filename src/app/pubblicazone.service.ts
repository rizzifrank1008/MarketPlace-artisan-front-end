import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubblicazoneService {

  private baseUrl = 'http://localhost:8081/prodotto/v1/postProdotto'; // l'URL  backend

  constructor(private http: HttpClient) { }

  publish(data: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, data);
  }
}
