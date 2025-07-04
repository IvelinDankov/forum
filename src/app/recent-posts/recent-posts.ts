import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.js';
import { IPost } from '../../interfaces/post.js';
import { Loader } from '../shared/loader/loader';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recent-posts',
  imports: [Loader],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.scss',
})
export class RecentPosts implements OnInit, OnDestroy {
  postList: IPost[] | null = null;
  errorFetchingData = false;

  private subscibe!: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.subscibe = this.apiService.loadPosts(5).subscribe({
      next: (value) => {
        this.postList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscibe.unsubscribe();
  }
}
