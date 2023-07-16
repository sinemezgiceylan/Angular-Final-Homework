import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post/post.service';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList: User[] = [];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(
    private route: Router,
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService
    ) {
    this.userList = this.userService.getUserList();
    this.calculateTotalPage();
    if(this.userService.getUserList().length === 0)
      this.userService.getUserList();
    if(this.postService.getPostList().length === 0)
      this.postService.getPostList();
    if(this.commentService.getCommentList().length === 0)
      this.commentService.getCommentList();
  }

  // Toplam sayfa sayısı hesaplandı.
  private calculateTotalPage() {
    let totalPage = this.userList.length / this.pageSize;

    const remainingItems = this.userList.length % this.pageSize;

    if(remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  // Yeni kullanıcı ekleme ekranı butonu eklendi.
  handleNewUserItemClicked() {
    this.route.navigateByUrl('/create-user')
  }

  // Önceki sayfaya geçiş butonu eklendi.
  handlePreviousPageButton() {
    if(this.pageIndex > 0) {
      this.pageIndex--;
    }
    
  }

  // Sonraki sayfaya geçiş butonu eklendi.
  handleNextPageButton() {

    if(this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }

  // Kullanıcı silme, son kullanıcı ve kullancıya ait post veya yorum kontrolü yapıldı.
  handleDeleteButton($event: number) {
    if(this.userService.getUserList().length === 1)
      alert("You can not delete last users.")
    else if(this.checkPostsAndComments($event) === true)
      alert("You can not delete a user with post or comment")
    else {
      this.userService.deleteUserItem($event);
      this.userList = this.userService.getUserList();
    }

  }

  // Post ve kategori kontrolü yapıldı.
  checkPostsAndComments(id: number): boolean {
    if(this.postService.getPostList().filter((post) => post.userId === id).length !== 0)
      return true;
    else if(this.commentService.getCommentList().filter((comment) => comment.userId === id).length !== 0)
      return true;
    else
      return false;
  }
}
