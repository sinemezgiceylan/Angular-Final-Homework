import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommentService } from 'src/app/comment/comment.service';

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
    private commentService: CommentService,
    private router : Router
  ) {
    this.postList = this.postService.getPostList();
    this.calculateTotalPage();
  }
 
  // Toplam sayfa kontrolü yapıldı.
  private calculateTotalPage() {
    let totalPage = this.postList.length / this.pageSize;

    const remainingItems = this.postList.length % this.pageSize;

    if(remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }
  // Bir önceki sayfaya geçiş kontrolü yapıldı.
  handlePreviousPageButton() {
    if(this.pageIndex > 0) {
      this.pageIndex--;
    }
    
  }
  // Bir sonraki sayfaya geçiş kontrolü yapıldı.
  handleNextPageButton() {

    if(this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }
  // Yeni post ekleme ekranı butonu oluşturuldu.
  handleNewPostItemClicked() {
    this.router.navigateByUrl('/create-post')
  }

  // Post silme ve posta ait yorum kontrolü yapıldı.
  handleDeleteButton($event: number) {
    if(this.checkComments($event) === true)
    alert("You can not delete a post with comment")
    else {
      this.postService.deletePostItem($event);
      this.postList = this.postService.getPostList();
    }

  }
 // Filtre eklendi.
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
  // Filte sıfırlandı.
  clearFilter() {
    this.postList = this.postService.getPostList();
    this.router.navigate(['/user-list']);
  }

  checkComments(id: number) : boolean {
    if(this.commentService.getCommentList().filter((comment) => comment.userId === id).length !== 0)
      return true;
    else {
      return false;
    }
  }
  
}
