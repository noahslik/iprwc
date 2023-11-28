import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgbNav, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
