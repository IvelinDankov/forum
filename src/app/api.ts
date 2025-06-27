import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private httpClient: HttpClient) {}

  loadThemes() {
    return this.httpClient
      .get('https://localhost:3000/api' + '/themes')
      .subscribe((res) => {});
  }

  loadPosts(limit?: number) {
    return this.httpClient.get(
      `https://localhost:3000/api/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
