import { Component, inject, Input, signal } from '@angular/core';
import { ProductService } from '@/shared/services/product.service';
import { Product } from '@/shared/models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  private productoService = inject(ProductService)
  @Input() id?: string ; 
  product = signal<Product | null>(null);
  
  ngOnInit(){
    if(!this.id)
      return;
    
    this.productoService.getById(this.id).subscribe({
      next: (result) =>
        {
          this.product.set(result)
        },
      error: () => {}
    })
  }
}
