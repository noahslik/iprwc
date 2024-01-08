import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../models/order.model';
import { OrderService } from '../services/order.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  providers: [OrderService],
})
export class AccountComponent {
  orders!: Order[];

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {
    this.orderService = orderService;
    this.authService.user$.subscribe(user => {
      if (user?.sub) {
        this.orderService.getOrders(user?.sub).subscribe((result: any) => {
          this.orders = result;
        });
      } 
    })
  }
}
