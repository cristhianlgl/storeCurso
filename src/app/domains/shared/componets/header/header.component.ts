import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  @Input({ required: true }) cart: Product[] = [];
  total = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update(value => !value);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cartChanges = changes['cart'];
    if (!cartChanges)
      return
    this.total.set(this.getTotal());
  }

  getTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
