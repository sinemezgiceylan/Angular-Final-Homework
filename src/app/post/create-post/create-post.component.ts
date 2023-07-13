import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { NgModel } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements AfterViewInit {
  @ViewChild('title') titleInput?: NgModel;

  postItem!: Post;
  isSuccess: boolean = false;
  userItem: User[] = [];

  constructor(

    private postService: PostService,
    private userService: UserService,
    private router: Router
  ){
    this.resetForm();
    this.userItem = this.userService.getUserList();
  }

  ngAfterViewInit(): void {
    
  }

  handleSavePostItem() {
    if(this.postItem.title === "" || this.postItem.content === "" || this.postItem.creationDate === "") {
      alert("Fill in all sections!")
    } else {
      this.postService.addPostItem(this.postItem);
      this.isSuccess = true;
      this.resetForm();
    }
  }

  handleCancelPostItem() {
    this.router.navigateByUrl('/post-list')
  }

  private resetForm() {
    this.postItem = {
      userId: 0,
      postId: 0,
      categoryId: 0,
      title: '',
      content: '',
      viewCount: 0,
      creationDate: new Date().toISOString(),
      isPublished: false
    };
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);

  }
}
