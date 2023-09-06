// carrello.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.cartItemsSubject.next(this.cartItems);
  }

  

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }
}
