import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { ConfigService } from './config.service';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

interface UserRequest {
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private authService: AuthService
  ) {
    this.url = `${this.configService.getBaseUrl()}/order`;
  }

  createOrder(order: Order) {
    return this.http.post(this.url, order);
  }

  getOrders(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}?userId=${userId.substring(6)}`);
  }
}
