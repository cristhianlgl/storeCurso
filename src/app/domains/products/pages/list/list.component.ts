import { Component, inject, signal } from '@angular/core';

import { Product } from '@/shared/models/product.model';
import { ProductComponent } from '@/products/componets/product/product.component';
import { HeaderComponent } from '@/shared/componets/header/header.component';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  cartServices = inject(CartService);
  productServices = inject(ProductService);
  cart = this.cartServices.cart;

  ngOnInit(){
    this.productServices.getAll().subscribe({
      next:(data) => this.products.set(data),
      error: () => {} 
    });  
  }

  getFromChild(product:Product){
    this.cartServices.addProductCart(product);
  }
}
