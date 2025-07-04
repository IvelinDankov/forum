import { Routes } from '@angular/router';
import { Main } from './main/main.js';
import { Login } from './auth/login/login.js';
import { Register } from './auth/register/register.js';
import { Logout } from './auth/logout/logout.js';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Main,
  },
  {
    path: 'auth/login',
    component: Login,
  },
  {
    path: 'auth/register',
    component: Register,
  },
  {
    path: 'auth/logout',
    component: Logout,
  },
];
