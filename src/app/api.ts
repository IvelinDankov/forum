import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../app/enviroments/environment.js';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadThemes() {
    return this.httpClient.get(apiURL + '/themes');
  }

  loadPosts(limit?: number) {
    // /posts?limit=5

    return this.httpClient.get(
      `${apiURL}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
