import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from "./add-product/add-product.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [CommonModule, AddProductComponent]
})
export class AdminComponent {

}
