import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  postList : Post[] = [];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(

    private postService: PostService,
    private route : Router
  ) {
    this.postList = this.postService.getPostList();
    this.calculateTotalPage();
  }

  private calculateTotalPage() {
    let totalPage = this.postList.length / this.pageSize;

    const remainingItems = this.postList.length % this.pageSize;

    if(remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  handlePreviousPageButton() {
    if(this.pageIndex > 0) {
      this.pageIndex--;
    }
    
  }

  handleNextPageButton() {

    if(this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }

  handleNewPostItemClicked() {
    this.route.navigateByUrl('/create-post')
  }

  handleDeleteButton($event: Number) {
    this.postService.deleteUserItem($event);
    this.postList = this.postService.getPostList();
  }
  
}
