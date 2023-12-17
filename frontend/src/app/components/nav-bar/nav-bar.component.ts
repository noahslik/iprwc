import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { PermissionService } from '../../services/permission.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgbNav, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  authenticated!: boolean;
  admin!: boolean;

  constructor(private auth: AuthService, private permissions: PermissionService, private basketService: BasketService) {
    this.auth.isAuthenticated$.subscribe(authenticated => this.authenticated = authenticated);
    this.permissions.isAdmin().then(value => this.admin = value);
    
  }

  onLogin() {
    this.auth.loginWithRedirect();
    
  }

  onSignup() {
    this.auth.loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }
  
  onLogout() {
    this.auth.logout();
    this.auth.getAccessTokenWithPopup()
  }

  getNumberOfItems() {
    return this.basketService.getNumberOfItems();
  }
}
