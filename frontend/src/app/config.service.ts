import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private baseUrl: string = "http://localhost:8080"

  constructor() { }

  getBaseUrl() {
    return this.baseUrl;
  }
}
