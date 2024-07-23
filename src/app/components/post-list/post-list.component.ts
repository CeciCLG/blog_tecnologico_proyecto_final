import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Posts } from '../../models/posts';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {


  constructor(public postsApi: ApiService) {
    this.getAllPost()
  }

  getAllPost(): void {
    this.postsApi.getAll().subscribe({
      next: (data) => {
        this.postsApi.postList = data;
        console.log(this.postsApi.postList);

      }
    })
  }
}
