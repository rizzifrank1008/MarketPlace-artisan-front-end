
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8081/utente/v1/postUtente'; // l'URL  backend

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, data);
  }
}

/* Il metodo register accetta un parametro data ( i dati del modulo di registrazione) 
e restituisce un'Observable contenente la risposta dalla chiamata POST al backend. Utilizza il modulo 
HttpClient per effettuare una richiesta POST all'endpoint /api/registrazione del backend. La risposta sarà sotto forma 
di un oggetto Observable, che può essere sottoscritto da un componente per ottenere la risposta del backend. */