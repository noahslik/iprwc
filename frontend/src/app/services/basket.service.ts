import { Injectable } from '@angular/core';
import { BasketItem } from '../models/basket-item.model';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root',
})
export class BasketService {

    basket: BasketItem[] = [];

    constructor() {
        let basketString = localStorage.getItem("basket")
        if (basketString) {
            let basketObject: BasketItem[] = JSON.parse(basketString);
            this.basket = basketObject;
            console.log(basketObject);
            
        }
    }

    addItem(product: Product) {
        if (!this.isProductInBasket(product)) {
            this.basket.push(new BasketItem(product, 1));
        }
        this.updateLocalStorage();
    }

    getItems() {
        return this.basket;
    }

    isProductInBasket(product: Product): boolean {
        return this.basket.some((item) => item.product.id === product.id);
    }

    getTotalPrice(): number {
        let runningTotal = 0;
        for (let item of this.basket) {
            runningTotal += item.product.price * item.amount;
        }
        return runningTotal;
    }

    getLength() {
        return this.basket.length;
    }

    updateLocalStorage() {
        let basketString = JSON.stringify(this.basket);
        localStorage.setItem("basket", basketString);
    }

    updateItem(updatedItem: BasketItem) {
        console.log(updatedItem);
        
        this.basket.forEach(item => {
            if (item.product.id == updatedItem.product.id) {
                item.amount = updatedItem.amount
            }
        })
        this.updateLocalStorage();
    }

    removeItem(itemToRemove: BasketItem) {
        this.basket.forEach(item => {
            if (item.product.id == itemToRemove.product.id) {
                const index = this.basket.indexOf(item);
                this.basket.splice(index, 1);
            }
        })
        this.updateLocalStorage();
    }

    getNumberOfItems() {
        return this.basket.length;
    }

    purge() {
        this.basket = []
        localStorage.removeItem("basket");
    }
}
