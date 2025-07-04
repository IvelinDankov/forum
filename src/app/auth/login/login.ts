import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service.js';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private router = inject(Router);

  constructor(private authService: AuthService) {
    this.authService.user = {
      firstName: 'Ivan',
      lastName: 'Petrov',
    };
    this.router.navigate(['/']);
  }
}
