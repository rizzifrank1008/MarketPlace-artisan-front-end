import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progetto-marketplace-artigiani-fron-end';

  constructor(private router: Router) {}

  isHomeRoute(): boolean {
    return this.router.url === '/home';
  }

  isProdottiRoute(): boolean {
    return this.router.url === '/prodotti';
  }

  isCarrelRoute(): boolean {
    return this.router.url === '/carrel';
  }

  isRegistrationRoute(): boolean {
    return this.router.url === '/registration';
  }
  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }
  isPubblicazioneRoute(): boolean {
    return this.router.url === '/pubblicazione';
  }

  
}
