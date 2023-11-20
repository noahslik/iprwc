import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { ProductCardComponent } from './store/product-card/product-card.component';
import { Product } from './shared/models/product.model';
import { StoreComponent } from "./store/store.component";
import { BasketComponent } from "./basket/basket.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, ProductCardComponent, StoreComponent, BasketComponent]
})
export class AppComponent {
    
}
