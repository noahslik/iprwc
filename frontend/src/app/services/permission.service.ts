import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private auth: AuthService) { }

  isAdmin(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.user$.subscribe(user => {
        if (user && user['role'].includes('admin')) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  }
}
