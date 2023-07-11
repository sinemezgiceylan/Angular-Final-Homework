import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CreateUserComponent } from './user/create-user/create-user.component';

const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'user-details/update', component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
