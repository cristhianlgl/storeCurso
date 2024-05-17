import { Component } from '@angular/core';

import { ProductComponent } from '../../componets/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  getFromChild(event:string){
    console.log(event)
  }
}
