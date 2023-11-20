import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
  imports: [CommonModule, ProductCardComponent]
})
export class StoreComponent {
  products = [
    new Product(
      1,
      "To Pimp A Butterfly", "Kendrick Lamar",
      19.95,
      "https://e.snmc.io/i/300/w/3a6ce8e5e033c643a146529fd774de12/8121875/Kendrick%20Lamar%20-%20To%20Pimp%20a%20Butterfly%2C%20Cover%20art.webp"
    ),
    new Product(
      2,
      "Ok Computer",
      "Radiohead", 19.95,
      "https://e.snmc.io/i/300/w/cb41b0acd3d7c304e1d1052b615ea300/8862252/Radiohead%20-%20OK%20Computer%2C%20Cover%20art.webp"
    ),
    new Product(
      3,
      "Wish You Were Here",
      "Pink Floyd", 19.95,
      "https://e.snmc.io/i/300/w/4a254e6f1a9d64edae48659b98939b2e/4184635/Pink%20Floyd%20-%20Wish%20You%20Were%20Here%2C%20Cover%20art.webp"
    ),
  ]
}
