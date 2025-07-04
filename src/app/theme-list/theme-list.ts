import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.js';
import { ITheme } from '../../interfaces/theme.js';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-theme-list',
  imports: [],
  templateUrl: './theme-list.html',
  styleUrl: './theme-list.scss',
})
export class ThemeList implements OnInit, OnDestroy {
  themeList: ITheme[] | null = null;

  private subscriptions!: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscriptions = this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        console.error('Failed to load themes', err);
      },
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
