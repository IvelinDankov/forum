import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../app/enviroments/environment.js';
import { ITheme } from '../interfaces/theme.js';
import { IPost } from '../interfaces/post.js';
import { Observable } from 'rxjs';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadThemes(): Observable<ITheme[]> {
    return this.httpClient.get<ITheme[]>(apiURL + '/themes');
  }

  loadPosts(limit?: number): Observable<IPost[]> {
    // /posts?limit=5

    return this.httpClient.get<IPost[]>(
      `${apiURL}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
