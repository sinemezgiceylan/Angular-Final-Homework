import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userItem?: User;

  constructor (
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    const params = this.route.snapshot.params;
    const userId = parseInt(params['userId']);
    this.userItem = this.userService.getUserItem(userId);
  }
}
