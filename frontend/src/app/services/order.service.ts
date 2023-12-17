import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { ConfigService } from './config.service';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private url: string;

    constructor(private http: HttpClient, private configService: ConfigService) {
        this.url = `${this.configService.getBaseUrl()}/order`;
    }

    createOrder(order: Order) {
        return this.http.post(this.url, order);
    }
}
