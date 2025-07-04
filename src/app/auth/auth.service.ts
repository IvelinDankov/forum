import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces/user.js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }
}
