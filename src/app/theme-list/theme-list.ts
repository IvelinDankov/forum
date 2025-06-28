import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.js';
import { ITheme } from '../../interfaces/theme.js';
import { Loader } from '../shared/loader/loader';

@Component({
  selector: 'app-theme-list',
  imports: [Loader],
  templateUrl: './theme-list.html',
  styleUrl: './theme-list.scss',
})
export class ThemeList implements OnInit {
  themeList: ITheme[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        console.error('Failed to load themes', err);
      },
    });
  }
}
