import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Assicurati di importare il tuo servizio di autenticazione

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Verifica se l'utente è autenticato utilizzando il servizio AuthService
    const isAuthenticated = this.authService.isAuthenticated();

    // Se l'utente è autenticato, reindirizzalo a un'altra pagina (ad esempio, la pagina principale)
    if (isAuthenticated) {
      this.router.navigate(['/home']); // Cambia '/home' con l'URL desiderato
      return false; // Non consentire l'accesso alla pagina "login"
    }

    return true; // Lascia passare l'utente se non è autenticato
  }
}
