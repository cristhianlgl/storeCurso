import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  constructor() { }

  getAll(){
    //return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products?limit=15&offset=15')
    return this.http.get<Product[]>('https://fakestoreapi.com/products?limit=10')
  }
}
