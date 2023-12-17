import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { ProductFilterPipe } from "../../pipes/filter.pipe";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-store',
    standalone: true,
    templateUrl: './store.component.html',
    styleUrl: './store.component.css',
    imports: [CommonModule, ProductCardComponent, ProductFilterPipe, ReactiveFormsModule]
})
export class StoreComponent {
  products: Product[] = []
  searchBox = new FormControl('')

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => (this.products = products));
  }
}
