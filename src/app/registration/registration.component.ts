import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  nome: string = '';
  cognome: string = '';
  codiceFiscale: string = '';
  cellulare: string = '';
  email: string = '';
  password: string = '';

  constructor(private registrationService: RegistrationService) { }

  onSubmit(): void {
    const formData = {
      nome: this.nome,
      cognome: this.cognome,
      codiceFiscale: this.codiceFiscale,
      cellulare: this.cellulare,
      email: this.email,
      password: this.password,
      
    };

    this.registrationService.register(formData).subscribe(
      response => {
        console.log('Dati inviati con successo:', response);
        // Potresti aggiungere qui una notifica di successo o reindirizzare l'utente
      },
      error => {
        console.error('Errore nell\'invio dei dati:', error);
        // Potresti gestire l'errore qui, ad esempio mostrando un messaggio di errore
      }
    );
  }

}
