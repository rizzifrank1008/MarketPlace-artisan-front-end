import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../prodotto.service';
import { GetImageService
 } from '../get-image.service';
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

        
        this.getImageService.getImage(product.image.imageId).subscribe((imagePng: any)=>{
          product.img=imagePng
        })

      });
      console.log(data);
    });
  }

  addToCart(product: any) {
    
  }
}
