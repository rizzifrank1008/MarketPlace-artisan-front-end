import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  constructor(
    private prodottoService: ProdottoService,
    private cookieService: CookieService
  ) { }

  products: any[] = [];

  ngOnInit() {
    this.prodottoService.getProducts().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
      this.products.forEach(product => {
        if (product.image)
          product.img = "http://localhost:8081/api/v1/getImage/" + product.image.imageId
      });
      console.log(data);
    });
  }

  addToCart(productId: any) {
    console.log(productId);

    // Recupera il carrello dal cookie o inizializzalo come un array vuoto
    const cartItems = JSON.parse(this.cookieService.get('cartItems') || '[]');

    // Aggiungi il prodotto al carrello
    cartItems.push(productId);

    // Salva il carrello aggiornato nei cookie
    this.cookieService.set('cartItems', JSON.stringify(cartItems));

    console.log(this.cookieService.get('cartItems'));



  }
}
