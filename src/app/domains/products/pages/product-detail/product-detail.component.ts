import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@/shared/services/product.service';
import { Product } from '@/shared/models/product.model';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '@/shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productoService = inject(ProductService)
  private cartService = inject(CartService)
  @Input() id?: string ; 
  product = signal<Product | null>(null);
  cover = signal('')
  
  ngOnInit(){
    if(!this.id)
      return;
    
    this.productoService.getById(this.id).subscribe({
      next: (result) =>
        {
          this.product.set(result)
          this.cover.set(result.images[0])
        },
      error: () => {}
    })
  }

  addToCart(){
    const product = this.product();
    if(!product)
      return;
    this.cartService.addProductCart(product)
  }

  changeImage(img:string){
    this.cover.set(img);
  }
}
