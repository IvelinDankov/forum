import { Component } from '@angular/core';
import { Api } from '../api.js';

@Component({
  selector: 'app-recent-posts',
  imports: [],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.scss',
})
export class RecentPosts {
  constructor(private apiService: Api) {
    this.apiService.loadThemes().subscribe((value) => {
      console.log(value);
    });
  }
}
