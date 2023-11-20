import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product.model';
import { BasketComponent } from '../../basket/basket.component';
import { BasketService } from '../../basket/basket.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product! : Product;

  constructor(private service : BasketService) {}

  addToBasket(product: Product) {
    this.service.addItem(product);
  }
}
