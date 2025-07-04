import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service.js';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements DoCheck {
  // get isLoggedIn() {
  //   return this.authService.isLoggedIn;
  // }

  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngDoCheck(): void {
    // No assignment needed since isLoggedIn is a getter
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
