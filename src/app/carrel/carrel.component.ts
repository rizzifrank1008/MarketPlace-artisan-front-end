import { Component } from '@angular/core';
import { CarrelloService } from '../carrello.service';

@Component({
  selector: 'app-carrel',
  templateUrl: './carrel.component.html',
  styleUrls: ['./carrel.component.css']
})
export class CarrelComponent {
  cartItems: any[] = [];
  

  constructor(private carrelloService: CarrelloService) { }

  ngOnInit() {
    this.carrelloService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

}
