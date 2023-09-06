import { Component } from '@angular/core';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent {
  constructor(private carrelloService: CarrelloService) { }
  
  productDetails: any[] = [
    {
      title: 'Prodotto 1',
      description: 'Descrizione prodotto 1.',
      price: 99.99,
      image: 'assets/sedia2.jpg'
    },
    {
      title: 'Prodotto 2',
      description: 'Descrizione prodotto 2.',
      price: 149.99,
      image: 'assets/sedia2.jpg'
    },
    // ... altri oggetti prodotto ...
  ];

  addToCart(product: any) {
    this.carrelloService.addToCart(product);
  }

  
}
