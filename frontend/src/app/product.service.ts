import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = "http://localhost:8080/product"

  constructor(private http: HttpClient) { }

  /** GET products */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  /** POST: add a new product */
  addProduct(product: Product): Observable<void> {
    return this.http.post<void>(this.url, product);
  }
}
