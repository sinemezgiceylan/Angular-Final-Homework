import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CreateCommentComponent } from './comment/create-comment/create-comment.component';
import { CommentDetailsComponent } from './comment/comment-details/comment-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'user-list', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'user-details/update', component: UserDetailsComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'post-details/:postId', component: PostDetailsComponent},
  {path: 'post-details/update', component: PostDetailsComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'create-category', component: CreateCategoryComponent},
  {path: 'category-details/:categoryId', component: CategoryDetailsComponent},
  {path: 'category-details/update', component: CategoryDetailsComponent},
  {path: 'comment-list', component: CommentListComponent},
  {path: 'create-comment', component: CreateCommentComponent},
  {path: 'comment-details/:commentId', component: CommentDetailsComponent},
  {path: 'comment-details/update', component: CommentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
