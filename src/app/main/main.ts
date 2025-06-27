import { Component } from '@angular/core';
import { RecentPosts } from '../recent-posts/recent-posts';
import { ThemeList } from '../theme-list/theme-list';

@Component({
  selector: 'app-main',
  imports: [RecentPosts, ThemeList],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
