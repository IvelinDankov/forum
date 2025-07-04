import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/auth.service.js';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService, private router: Router) {}
}
