import { Component } from '@angular/core';
import { Api } from '../api.js';

@Component({
  selector: 'app-theme-list',
  imports: [],
  templateUrl: './theme-list.html',
  styleUrl: './theme-list.scss',
})
export class ThemeList {
  constructor(private apiService: Api) {
    this.apiService.loadThemes().subscribe((value) => {
      console.log(value);
    });
  }
}
