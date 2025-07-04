import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service.js';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.scss',
})
export class Logout {
  constructor(private router: Router, private authService: AuthService) {
    this.authService.user = null;
    this.router.navigateByUrl('/');
  }
}
