import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service.js';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router, private authService: AuthService) {
    this.authService.user = {
      firstName: 'Ivan',
      lastName: 'Petrov',
    };
    this.router.navigateByUrl('/');
  }
}
