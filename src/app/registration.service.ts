import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://localhost:8081/api/v1/addUser'; // l'URL  backend

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  register(data: any): Observable<any> {
    const url = `${this.apiUrl}`;
    
    // Creazione dell'header con il token JWT
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.cookieService.get('jwt')
    });
    
    // Ora inviamo la richiesta POST con l'header dell'autorizzazione
    return this.http.post<any[]>(url, data, { headers: headers });
  }
}


/* Il metodo register accetta un parametro data ( i dati del modulo di registrazione) 
e restituisce un'Observable contenente la risposta dalla chiamata POST al backend. Utilizza il modulo 
HttpClient per effettuare una richiesta POST all'endpoint /api/registrazione del backend. La risposta sarà sotto forma 
di un oggetto Observable, che può essere sottoscritto da un componente per ottenere la risposta del backend. */