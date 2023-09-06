import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Verifica se l'utente è autenticato utilizzando il servizio AuthService
    const isAuthenticated = this.authService.isAuthenticated();
    
    // Se l'utente è autenticato, reindirizzalo alla pagina principale solo se non sta cercando di accedere alla pagina di login
    if (isAuthenticated && !this.router.url.includes('/login')) {
      this.router.navigate(['/home']);
      return false; // Non consentire l'accesso alla pagina principale
    }

    return true; // Lascia passare l'utente
  }
}
