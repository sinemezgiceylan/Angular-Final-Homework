import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { CreateUserComponent } from './user/create-user/create-user.component'
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    UserDetailsComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
