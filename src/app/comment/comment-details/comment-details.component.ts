import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { Post } from 'src/app/post/post';
import { PostService } from 'src/app/post/post.service';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';
import { CommentService } from '../comment.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {

  commentList : Comment[] = [];
  commentId : number;
  commentItem? : Comment;
  postList : Post[] = [];
  userList: User[] = [];
  categoryList: Category[] = [];
  postItem? : Post;
  postId?: number;
  userItem : User;
  userId: number = 0;
  categoryId?: number;
  categoryItem?: Category;
  comment: string = "";
  creationDate: string = "";
  isConfirmed: boolean = false;
  edit: boolean = false;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private commentService : CommentService,
    private postService : PostService,
    private userService : UserService,
    private categoryService : CategoryService
  ) {
    this.commentList = this.commentService.getCommentList();
    this.userList = this.userService.getUserList();
    const params = this.route.snapshot.params;
    const commentId = parseInt(params['commentId']);
    this.commentId = commentId;
    this.commentItem = this.commentService.getCommentItem(commentId);
    this.postItem = this.postService.getPostItem(Number(this.commentService.getCommentItem(commentId)!.postId))!;
    this.postList = this.postService.getPostList();
    this.userItem = this.userService.getUserItem(Number(this.commentService.getCommentItem(commentId)!.userId))!;
  }

  handleEditButton() {
    this.edit = true;
  }

  // Yorum düzenlenmesi ve boş alan kontrolü yapıldı.
  handleEditSaveButton() {

    if(this.commentItem?.postId === 0 || this.commentItem?.userId === 0 || this.comment === "" || this.creationDate === "") {
      alert("Fill in all section!")
    } else {
      const comment: Comment = {
        commentId : this.commentId!,
        postId : this.postId!,
        userId : this.userId!,
        comment : this.comment,
        creationDate: this.creationDate,
        isConfirmed: this.isConfirmed
      }
  
      this.commentService.updateCommentItem(comment)
      alert("Success")
      this.router.navigateByUrl('/comment-list')
    }

}
}
