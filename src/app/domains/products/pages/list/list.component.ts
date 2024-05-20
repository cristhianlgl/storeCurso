import { Component, signal } from '@angular/core';

import { Product } from '../../../shared/models/product.model';
import { ProductComponent } from '../../componets/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);

  constructor() {
    const productsInit:Product[] = [
      {
        id: Date.now(),
        title: 'producto 1',
        price : 100,
        image: 'https://picsum.photos/640/640?r=23',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 2',
        price : 100,
        image: 'https://picsum.photos/640/640?r=24',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'producto 3',
        price : 100,
        image: 'https://picsum.photos/640/640?r=25',
        createAt: new Date().toISOString()
      }
    ];
    this.products.set(productsInit);

  }
  getFromChild(event:string){
    console.log(event)
  }
}
