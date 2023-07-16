import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { NgModel } from '@angular/forms';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/user';
import { Router } from '@angular/router';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';

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
  categoryList: Category[] = [];

  constructor(

    private postService: PostService,
    private userService: UserService,
    private categoryService: CategoryService,
    private router: Router
  ){
    this.resetForm();
    this.userItem = this.userService.getUserList();
    this.categoryList = this.categoryService.getCategoryList();
  }

  ngAfterViewInit(): void {
    
  }

  // Yeni post ekleme ve boş alan kotrolü yapıldı.
  handleSavePostItem() {
    if(this.postItem.userId === 0 || this.postItem.title === "" || this.postItem.content === "" || this.postItem.creationDate === "") {
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

  // Post ekleme ekranı resetleme kontrolü yapıldı.
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
