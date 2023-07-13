import { Component } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  postList : Post[] = [];
  userList : User;

  postItem? : Post;
  postId?: number;
  userId: number = 0;
  categoryId?: number;
  title: string = "";
  viewCount?: number;
  creationDate: string = "";
  isPublished: boolean = false;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private postService : PostService,
    private userService : UserService
  ) {
    this.postList = this.postService.getPostList();
    const params = this.route.snapshot.params;
    const postId = parseInt(params['postId']);
    this.postId = postId;
    this.postItem = this.postService.getPostItem(postId);
    this.userList = this.userService.getUserItem(Number(this.postService.getPostItem(postId)!.userId))!;
  }
}
