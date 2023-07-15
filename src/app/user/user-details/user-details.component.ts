import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userList: User[] = [];

  userItem?: User;
  userId?: number;
  
  username: string = "";
  email: string = "";
  creationDate: string = "";
  isActive: boolean = true;
  edit: boolean = false;


  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.userList = this.userService.getUserList();
    const params = this.route.snapshot.params;
    const userId = parseInt(params['userId']);
    this.userId = userId;
    this.userItem = this.userService.getUserItem(userId);
    if(!this.userItem) {
      this.router.navigateByUrl('/user-list') ////////////////////////
    }
  }

  handleEditButton() {
    this.edit = true;
  }

  handleEditSaveButton() {
    const user: User = {
      userId : this.userId!,
      username : this.username,
      email : this.email,
      creationDate: this.creationDate,
      isActive: this.isActive
    }

    this.userService.updateUserItem(user)
    alert("Success")
    this.router.navigateByUrl('/user-list')
  }


}
