import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketItem } from '../../../models/basket-item.model';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BasketService } from '../../../services/basket.service';

@Component({
    selector: 'app-basket-item',
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './basket-item.component.html',
    styleUrl: './basket-item.component.css'
})
export class BasketItemComponent implements OnInit {
    @Input()
    item!: BasketItem;
    amount = new FormControl(0, Validators.required);

    constructor(private basketService: BasketService) {

    }

    ngOnInit(): void {
        this.amount.setValue(this.item.amount);
    }

    onClickUpdate(event: MouseEvent) {
        if (this.amount.value) {
            this.item.amount = this.amount.value;
            this.basketService.updateItem(this.item)
        }

        var btn = event.target as Element;
        btn.innerHTML = "Updated &#x2713"
        btn.classList.add("btn-success")
        btn.classList.remove("btn-outline-primary")

        setTimeout(function () {
            btn.innerHTML = "Update";
            btn.classList.remove("btn-success")
            btn.classList.add("btn-outline-primary")
        }, 1000);

    }

    removeItem() {
        this.basketService.removeItem(this.item);
    }
}
