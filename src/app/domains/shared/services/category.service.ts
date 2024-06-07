import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient)

  constructor() { }

  getAll() {
    return this.http.get<Category[]>('https://api.escuelajs.co/api/v1/categories?limit=5&offset=0')
  }
}
