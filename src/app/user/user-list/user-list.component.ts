import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  userList: User[] = [];

  pageIndex: number = 0;
  pageSize: number = 10;
  totalPage: number = 1;

  constructor(
    private route: Router,
    private userService: UserService
    ) {
    this.userList = this.userService.getUserList();
    this.calculateTotalPage();
  }

  private calculateTotalPage() {
    let totalPage = this.userList.length / this.pageSize;

    const remainingItems = this.userList.length % this.pageSize;

    if(remainingItems > 0) {
      totalPage++;
    }
    this.totalPage = totalPage;
  }

  handleNewUserItemClicked() {
    this.route.navigateByUrl('/create-user')
  }

  handlePreviousPageButton() {
    if(this.pageIndex > 0) {
      this.pageIndex--;
    }
    
  }

  handleNextPageButton() {

    if(this.pageIndex < this.totalPage - 1) {
      this.pageIndex++;
    }
  }
}
