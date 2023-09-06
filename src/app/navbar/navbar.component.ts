import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // Definisci la proprietà isLoggedIn e inizializzala a false

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Controlla lo stato di autenticazione quando il componente viene caricato
    this.authService.checkAuthentication().subscribe((authenticated) => {
      this.isLoggedIn = authenticated;
    });
  }
  
  
  
  // Metodo per eseguire il logout
  logout(): void {
    this.authService.logout();
    // Puoi aggiungere qui eventuali altre operazioni necessarie durante il logout
    // Per esempio, reindirizzamento alla pagina di login
    this.router.navigate(['/login']);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
