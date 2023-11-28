import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "./product-card/product-card.component";
import { Product } from '../shared/models/product.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from '../product.service';

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
