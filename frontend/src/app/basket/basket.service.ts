import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { BasketItem } from '../shared/models/basket-item.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  
  private items: BasketItem[] = [];

  addItem(product: Product) {
    if (!this.isProductInBasket(product)) {
      this.items.push(new BasketItem(product, 1));
    }
  }

  getItems() {
    return this.items;
  }

  private isProductInBasket(product: Product): boolean {
    return this.items.some((item) => item.product.id === product.id);
  }

  getTotalPrice() {
    let runningTotal = 0;
    for (let item of this.items)
    {
      runningTotal += item.product.price;
    }
    return runningTotal;
  }
}
