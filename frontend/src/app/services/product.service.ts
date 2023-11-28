import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ConfigService } from './config.service';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private url: string;

    constructor(private http: HttpClient, private configService: ConfigService) {
        this.url = `${this.configService.getBaseUrl()}/product`;
    }

    /** GET products */
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url);
    }

    /** POST: add a new product */
    addProduct(product: Product): Observable<void> {
        return this.http.post<void>(this.url, product);
    }
}
