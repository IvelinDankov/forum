import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.js';

@Component({
  selector: 'app-recent-posts',
  imports: [],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.scss',
})
export class RecentPosts implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadPosts(5).subscribe((value) => {
      console.log(value);
    });
  }
}
