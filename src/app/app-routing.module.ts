import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'user-details/update', component: UserDetailsComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'post-details/:postId', component: PostDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
