import { Component } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  postList : Post[] = []
  postItem? : Post;
  postId?: number;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private postService : PostService
  ) {
    this.postList = this.postService.getPostList();
    const params = this.route.snapshot.params;
    const postId = parseInt(params['postId']);
    this.postId = postId;
    this.postItem = this.postService.getPostItem(postId);
  }
}
