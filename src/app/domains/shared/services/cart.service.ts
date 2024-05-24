import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() => this.cart().reduce((total, product) => total + product.price, 0));

  constructor() { }

  addProductCart(product: Product){
    this.cart.update(list => [...list, product]);
  }
}
