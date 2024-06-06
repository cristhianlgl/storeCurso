import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  constructor() { }

  getAll() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=15&offset=5')
    //return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=10')
  }

  getById(id: string) {
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)
    //return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}
