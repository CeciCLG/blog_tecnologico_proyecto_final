import { Injectable } from '@angular/core';
import { Posts } from '../models/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly API_URL = 'https://my-json-server.typicode.com/mariogiron/blog-server/posts';

  postList: Posts[];

  constructor(private http: HttpClient) {
    this.postList = [];
  }

  getAll() {
    return this.http.get<Posts[]>(this.API_URL);
  }

}
