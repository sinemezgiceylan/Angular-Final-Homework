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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ButtonComponent,]
})
export class AppModule { }
