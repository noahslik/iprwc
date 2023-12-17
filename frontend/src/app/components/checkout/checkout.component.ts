import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Order } from '../../models/order.model';
import { AuthService } from '@auth0/auth0-angular';
import { BasketService } from '../../services/basket.service';
import { OrderItem } from '../../models/order-item.model';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.css',
    providers: [OrderService]
})
export class CheckoutComponent {
    userId!: string
    total!: number

    countryOptions = [
        {
            label: "Belgium",
            value: "belgium"
        },
        {
            label: "Netherlands",
            value: "netherlands"
        }
    ]

    checkoutForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        zip: ['', Validators.required],
        city: ['', Validators.required],
        country: ['netherlands']
    })

    constructor(
        private formBuilder: FormBuilder,
        private orderService: OrderService,
        private authService: AuthService,
        private basksetService: BasketService,
        private router: Router
    ) {
        this.authService.user$.subscribe(user => {
            if (user?.sub) {
                this.userId = user?.sub;
            }
        })
        this.total = this.basksetService.getTotalPrice();
    }

    onSubmit() {
        const order = this.buildOrder();

        this.orderService.createOrder(order).subscribe(value => {
            console.log(value);
        })

        this.basksetService.purge();
    }

    buildOrder(): Order {
        const orderItems = this.createOrderItems();

        const firstName = this.checkoutForm.value.firstName;
        const lastName = this.checkoutForm.value.lastName;
        const address = this.checkoutForm.value.address;
        const zip = this.checkoutForm.value.zip;
        const city = this.checkoutForm.value.city;
        const country = this.checkoutForm.value.country;

        if (!firstName || !lastName || !address || !zip || !city || !country) {
            throw new Error("Form is invalid.")
        }

        const order: Order = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            zip: zip,
            city: city,
            country: country,
            userId: this.userId,
            orderItems: orderItems
        }

        return order;
    }

    createOrderItems(): OrderItem[] {
        const basketItems = this.basksetService.getItems();
        let orderItems: OrderItem[] = []

        basketItems.forEach(item => {
            if (!item.product.id) {
                throw new Error("Product id is undefined");
            }
            const orderItem: OrderItem = {
                productId: item.product.id,
                amount: item.amount
            }
            orderItems.push(orderItem);
        });
        return orderItems;
    }

    onModalClose() {
        this.router.navigate([""]);
    }
}
