import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // Definisci la proprietà isLoggedIn e inizializzala a false

  constructor(private router: Router, private authService: AuthService, private cookieService: CookieService) {}


  ngOnInit() {
    // Controlla lo stato di autenticazione quando il componente viene caricato
    this.authService.checkAuthentication().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  }
  
  
  
logout(): void {
  // Elimina il cookie che indica l'autenticazione
  this.cookieService.delete('isAuthenticated');
  
  // Esegui il logout tramite il servizio AuthService
  this.authService.logout();
  
  // Reindirizza l'utente alla pagina di login
  this.router.navigate(['/login']);
}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
