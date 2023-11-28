import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { Product } from '../../shared/models/product.model';
import { ReactiveFormsModule, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-product',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-product.component.html',
    styleUrl: './add-product.component.css'
})
export class AddProductComponent {
    productForm = this.formBuilder.group({
        name: ['', Validators.required],
        artist: ['', Validators.required],
        price: ['', Validators.required],
        imageUrl: ['', Validators.required]
    });

    constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

    onSubmit() {
        const product: Product = {
            name: this.productForm.value.name || '',
            artist: this.productForm.value.artist || '',
            price: Number(this.productForm.value.price) || 0,
            imageUrl: this.productForm.value.imageUrl || ''
        }
        this.productService.addProduct(product).subscribe();
    }
}
