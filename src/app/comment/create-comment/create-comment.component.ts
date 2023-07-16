import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/post/post';
import { PostService } from 'src/app/post/post.service';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { Comment } from '../comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent {

  commentItem!: Comment;
  isSuccess: boolean = false;
  userItem: User[] = [];
  postItem: Post[] = [];

  constructor(

    private commentService: CommentService,
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ){
    this.resetForm();
    this.userItem = this.userService.getUserList();
    this.postItem = this.postService.getPostList();
  }

  ngAfterViewInit(): void {
    
  }

  // Yeni yorum ekleme ve boş alan kontrolü yapıldı.
  handleSaveCommentItem() {
    if(this.commentItem.postId === 0 || this.commentItem.userId === 0 || this.commentItem.comment === "" || this.commentItem.creationDate === "") {
      alert("Fill in all sections!")
    } else {
      this.commentService.addCommentItem(this.commentItem);
      this.isSuccess = true;
      this.resetForm();
    }
  }

  handleCancelCommentItem() {
    this.router.navigateByUrl('/comment-list')
  }

  // Yorum ekleme ekranı resetleme kontrolü yapıldı.
  private resetForm() {
    this.commentItem = {
      commentId: 0,
      userId: 0,
      postId: 0,
      comment: '',
      creationDate: new Date().toISOString(),
      isConfirmed: false
    };
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);

  }
}
