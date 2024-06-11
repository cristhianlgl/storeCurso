import { Component, inject, input, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { Product } from '@/shared/models/product.model';
import { ProductComponent } from '@/products/componets/product/product.component';
import { CartService } from '@/shared/services/cart.service';
import { ProductService } from '@/shared/services/product.service';
import { CategoryService } from '@/shared/services/category.service';
import { Category } from '@/shared/models/category';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  cartServices = inject(CartService);
  productServices = inject(ProductService);
  categoryServices = inject(CategoryService);
  category_id = input<string>()

  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(){
    this.getProducts();
  }

  private getProducts() {
    this.productServices.getAll(this.category_id()).subscribe({
      next: (data) => this.products.set(data),
      error: () => { }
    });
  }

  private getCategories() {
    this.categoryServices.getAll().subscribe({
      next: (data) =>  this.categories.set(data),
      error: () => { }
    });
  }

  getFromChild(product:Product){
    this.cartServices.addProductCart(product);
  }
}
