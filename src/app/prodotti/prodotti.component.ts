import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  constructor(private prodottoService: ProdottoService) { }

  products: any[] = [];

  ngOnInit() {
    // Quando il componente viene inizializzato, carica i dati dei prodotti dal servizio.
    this.prodottoService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    // Implementa la logica per aggiungere il prodotto al carrello qui.
  }
}
