import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../services/basket.service';
import { BasketItemComponent } from "./basket-item/basket-item.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-basket',
    standalone: true,
    templateUrl: './basket.component.html',
    styleUrl: './basket.component.css',
    imports: [CommonModule, BasketItemComponent]
})
export class BasketComponent {

    constructor(private basketService: BasketService, private router: Router) { }

    checkout() {
        this.router.navigate(["checkout"]);
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
