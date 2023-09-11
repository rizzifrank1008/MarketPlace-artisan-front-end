import { Component, OnInit } from '@angular/core';
import {
  GetImageService
} from '../get-image.service';
import { ProdottoService } from '../prodotto.service';
@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
  constructor(private prodottoService: ProdottoService , private getImageService: GetImageService ) { }

  products: any[] = [];

  ngOnInit() {

    this.prodottoService.getProducts().subscribe((data: any[]) => {

      console.log(data);
      this.products = data;
      this.products.forEach(product => {
        if(product.image)
          product.img= "http://localhostproduct:8081/api/v1/getImage/" + product.image.imageId
      });
      console.log(data);
    });
  }

  addToCart(product: any) {

  }
}
