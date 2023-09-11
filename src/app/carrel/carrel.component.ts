import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-carrel',
  templateUrl: './carrel.component.html',
  styleUrls: ['./carrel.component.css']
})
export class CarrelComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    // Recupera il carrello dai cookie
    console.log('Carrello recuperato dai cookie:', this.cartItems);
    
    const cartItemsFromCookie = this.cookieService.get('cartItems');
    console.log(this.cookieService.get('cartItems'));
    if (cartItemsFromCookie) {
      this.cartItems = JSON.parse(cartItemsFromCookie);
      console.log('Carrello recuperato dai cookie:', this.cartItems);
    }
  }
  
}
