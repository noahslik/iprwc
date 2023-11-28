import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-store',
  standalone: true,
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
  imports: [CommonModule, ProductCardComponent]
})
export class StoreComponent {
  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => (this.products = products));
  }
}
