import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubblicazoneService {

  private baseUrl = 'http://localhost:8081/api/v1/postProdotto'; // l'URL  backend

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  publish(data: any): Observable<any> {




    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.cookieService.get('jwt')
    });

    console.log(headers)


    const url = `${this.baseUrl}`;
    return this.http.post(url, data, { headers: headers });
  }
}
