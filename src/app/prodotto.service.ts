import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private apiUrl = 'http://localhost:8081/api/v1/getProdotto'; 

  constructor(private http: HttpClient ,  private cookieService: CookieService ) { }

  getProducts(): Observable<any[]> {
    
    console.log(this.cookieService.get("jwt"));
    return this.http.get<any[]>(this.apiUrl,{headers: new HttpHeaders().set('Authorization','Bearer '+ this.cookieService.get("jwt"))});
  }
}
