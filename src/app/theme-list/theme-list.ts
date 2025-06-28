import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.js';

@Component({
  selector: 'app-theme-list',
  imports: [],
  templateUrl: './theme-list.html',
  styleUrl: './theme-list.scss',
})
export class ThemeList implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.loadThemes().subscribe((value) => {
      console.log(value);
    });
  }
}
