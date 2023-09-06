import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginService } from '../login.service';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  modalRef!: BsModalRef; // Inizializzazione della proprietà modalRef

  constructor(
    private loginService: LoginService,
    private router: Router,
    private modalService: BsModalService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Verifica se l'utente è già autenticato al caricamento del componente
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']); // Reindirizza l'utente alla home
    }
  }

  onSubmit(): void {
    const formData = {
      email: this.email,
      password: this.password,
    };
  
    this.loginService.effettuaLogin(formData).subscribe(
      response => {
        // Se il login è riuscito, segnala che l'utente è autenticato
        this.authService.setAuthenticated(true);
  
        // Reindirizza l'utente alla home
        this.router.navigate(['/home']);
  
        // Mostra il modale di successo
        this.mostraModaleSuccesso();
      },
      error => {
        console.error('Errore durante il login:', error);
        // Gestisci l'errore qui, ad esempio mostrando un messaggio di errore all'utente
      }
    );
  }

  // Funzione per mostrare un modale di successo
  mostraModaleSuccesso(): void {
    console.log('Funzione mostraModaleSuccesso chiamata');
    this.modalRef = this.modalService.show(SuccessModalComponent, {
      initialState: {
        message: 'Hai effettuato l\'accesso con successo'
      }
    });
  }
}
