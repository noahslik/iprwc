import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../shared/models/product.model';
import { BasketService } from './basket.service';
import { BasketItemComponent } from "./basket-item/basket-item.component";

@Component({
    selector: 'app-basket',
    standalone: true,
    templateUrl: './basket.component.html',
    styleUrl: './basket.component.css',
    imports: [CommonModule, BasketItemComponent]
})
export class BasketComponent {

  constructor(private basketService: BasketService) {}

  checkout() {
    throw new Error('Method not implemented.');
  }
  getTotalPrice() {
    return this.basketService.getTotalPrice();
  }

  getBasketItems() {
    return this.basketService.getItems();
  }

  getLength() {
    return this.basketService.getLength();
  }
}
