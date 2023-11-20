import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketItem } from '../../shared/models/basket-item.model';
import { FormsModule } from '@angular/forms';
import { BasketService } from '../basket.service';

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
