import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketItem } from '../../../models/basket-item.model';
import { FormsModule } from '@angular/forms';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-basket-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basket-item.component.html',
  styleUrl: './basket-item.component.css'
})
export class BasketItemComponent {
  @Input()
  item! : BasketItem;

  constructor(private basketService: BasketService) {}

  increaseQuantity() {

  }

  decreaseQuantity() {

  }
}
