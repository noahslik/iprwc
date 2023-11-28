import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { StoreComponent } from "./components/store/store.component";
import { BasketComponent } from "./components/basket/basket.component";
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavBarComponent, ProductCardComponent, StoreComponent, BasketComponent, HttpClientModule],
    providers: [ProductService]
})
export class AppComponent {
}
