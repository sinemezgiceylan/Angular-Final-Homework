import { Component } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  postList : Post[] = [];
  userList: User[] = [];
  categoryList: Category[] = [];
  userItem : User;
  categoryItem : Category;

  postItem? : Post;
  postId?: number;
  userId: number = 0;
  categoryId?: number;
  title: string = "";
  content: string = "";
  viewCount?: number;
  creationDate: string = "";
  isPublished: boolean = false;
  edit: boolean = false;

  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private postService : PostService,
    private userService : UserService,
    private categoryService : CategoryService
  ) {
    this.postList = this.postService.getPostList();
    this.categoryList = this.categoryService.getCategoryList();
    const params = this.route.snapshot.params;
    const postId = parseInt(params['postId']);
    this.postId = postId;
    this.postItem = this.postService.getPostItem(postId);
    this.userItem = this.userService.getUserItem(Number(this.postService.getPostItem(postId)!.userId))!;
    this.postList = this.postService.getPostList();
    this.categoryItem = this.categoryService.getCategoryItem(Number(this.postService.getPostItem(postId)!.categoryId))!;
    console.log(this.categoryItem);
    this.userList = this.userService.getUserList();
      
  }

  handleEditButton() {
    this.edit = true;
  }
  // Düzenleme yapılırken boş alan kontrolü yapıldı.
  handleEditSaveButton() {

    if(this.postItem?.userId === 0 || this.title === "" || this.creationDate === "") {
      alert("Fill in all blanks!")
    } else {
      const post: Post = {
        postId : this.postId!,
        userId : this.userId!,
        categoryId: this.categoryId!,
        title : this.title,
        content : this.content,
        viewCount : this.viewCount!,
        creationDate: this.creationDate,
        isPublished: this.isPublished
      }
  
      this.postService.updatePostItem(post)
      alert("Success!")
      this.router.navigateByUrl('/post-list')
    }

}
}
