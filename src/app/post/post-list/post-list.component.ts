import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  columns: string[] = ['POST ID', 'TITLE', 'VIEW COUNT', 'CREATION DATE', 'PUBLISHED', 'EDIT'];
  filterOptions: string[] = ["postId", "userId", "categoryId"]

  postId: number = 0;
  title: string = '';
  viewCount: number = 0;
  creationDate: string = '';
  ispublished: boolean = false;
  placeHolderTitle: string = '';

  constructor(

    private postService: PostService,
    private route : ActivatedRoute,
    private router : Router
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
    this.router.navigateByUrl('/create-post')
  }

  handleDeleteButton($event: Number) {
    this.postService.deleteUserItem($event);
    this.postList = this.postService.getPostList();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      const postId = params['postId'];
      const userId = params['userId'];
      const categoryId = params['categoryId'];
      this.postList = this.postService.getPostList();

      if(postId) {
        this.postList = this.postList.filter(post => post.postId === Number(postId));
      }
      if(userId) {
        this.postList = this.postList.filter(post => post.userId === Number(userId));
      }
      if(categoryId) {
        this.postList = this.postList.filter(post => post.categoryId === Number(categoryId));
      }
    });
  }

  applyFilter(obj: any) {
    if(obj.filterBy === 'postId'){
      this.router.navigate(['/post-list'], {queryParams: {postId: obj.filterValue}});
    } else if (obj.filterBy === 'userId') {
      this.router.navigate(['/post-list'], {queryParams: {postId: obj.filterValue}});
    } else if (obj.filterBy === 'categoryId') {
      this.router.navigate(['/post-list'], {queryParams: {postId: obj.filterValue}})
    }

  }

  clearFilter() {
    this.postList = this.postService.getPostList();
    this.router.navigate(['/user-list']);
  }
  
}
