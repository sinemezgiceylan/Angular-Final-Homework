import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { ButtonComponent } from './button/button.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { FilterComponent } from './filter/filter.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentDetailsComponent } from './comment/comment-details/comment-details.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    UserDetailsComponent,
    CreateUserComponent,
    ButtonComponent,
    PostListComponent,
    CreatePostComponent,
    PostDetailsComponent,
    FilterComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    CreateCategoryComponent,
    CommentListComponent,
    CommentDetailsComponent,
    CreateCommentComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonComponent,]
})
export class AppModule { }
