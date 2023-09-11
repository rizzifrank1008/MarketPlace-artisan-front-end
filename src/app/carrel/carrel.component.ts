import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { filter, from, switchMap, tap, toArray } from 'rxjs';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-carrel',
  templateUrl: './carrel.component.html',
  styleUrls: ['./carrel.component.css']
})
export class CarrelComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cookieService: CookieService, private prodottoService: ProdottoService) { }

  ngOnInit() {
    // filter(product => this.cookieService.get('cartItems').includes(product.prodottoId))
    this.prodottoService.getProducts().pipe(
      switchMap((products) => from(products)),
      filter(product => this.cookieService.get('cartItems').includes(product.prodottoId)),
      toArray(),
      tap((products) => console.log("pd" + products)))
      .subscribe((products) => {
        this.cartItems = products;
        this.cartItems.map((product) => product.image = "http://localhost:8081/api/v1/getImage/" + product.image.imageId)

      });
  }

}
