// login.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://marketplace:8081/api/getToken'; 

  constructor(private http: HttpClient) { }

  effettuaLogin(dati: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, dati);
  }
}
