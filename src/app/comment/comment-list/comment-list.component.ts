import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {

  commentList : Comment[] = [];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  columns: string[] = ['POST ID', 'COMMENT', 'CREATION DATE', 'CONFIRMED', 'EDIT'];
  filterOptions: string[] = ["postId"]

  postId: number = 0;
  comment: string = '';
  creationDate: string = '';
  isConfirmed: boolean = false;
  placeHolderTitle: string = '';

  constructor(

    private commentService: CommentService,
    private route : ActivatedRoute,
    private router : Router
  ) {
    this.commentList = this.commentService.getCommentList();
    this.calculateTotalPage();
  }

  private calculateTotalPage() {
    let totalPage = this.commentList.length / this.pageSize;

    const remainingItems = this.commentList.length % this.pageSize;

    if(remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  // Bir önceki sayfaya geçiş butonu oluşturuldu.
  handlePreviousPageButton() {
    if(this.pageIndex > 0) {
      this.pageIndex--;
    }
    
  }

  // Bir sonraki sayfaya geçiş butonu oluşturuldu.
  handleNextPageButton() {

    if(this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }

  handleNewCommentItemClicked() {
    this.router.navigateByUrl('/create-comment')
  }

  // Yorum silme butonu oluşturuldu.
  handleDeleteButton($event: Number) {
    this.commentService.deleteCommentItem($event);
    this.commentList = this.commentService.getCommentList();
  }

  // Filtreleme kontrolü yapıldı.
  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      const postId = params['postId'];
      this.commentList = this.commentService.getCommentList();

      if(postId) {
        this.commentList = this.commentList.filter(comment => comment.postId === Number(postId));
      }

    });
  }

  applyFilter(obj: any) {
    if(obj.filterBy === 'postId'){
      this.router.navigate(['/post-list'], {queryParams: {postId: obj.filterValue}});
    }

  }

  clearFilter() {
    this.commentList = this.commentService.getCommentList();
    this.router.navigate(['/comment-list']);
  }
}
