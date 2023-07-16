import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements AfterViewInit {
  @ViewChild('username') usernameInput?: NgModel;

  userItem!: User;
  isSuccess: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.resetForm();
  }

  ngAfterViewInit(): void {
    
  }

  // Yeni kullanıcı ekleme ve boş alan kotrolü yapıldı.
  handleSaveUserItem() {
    if(this.userItem.username === "" || this.userItem.email === "" || this.userItem.creationDate === "") {
      alert("Fill in all sections!")
    } else {
      this.userService.addUserItem(this.userItem);
      this.isSuccess = true;
      this.resetForm();
    }
  }
  // Çıkış kontrolü eklendi.
  handleCancelUserItem() {
    this.router.navigateByUrl('/user-list')
  }

  // Kullanı ekleme ekranı resetleme kontrolü yapıldı.
  private resetForm() {
    this.userItem = {
      userId: 0,
      username: '',
      email: '',
      creationDate: new Date().toISOString(),
      isActive: false
    };
    setTimeout(() => {
      this.isSuccess = false;
    }, 2000);

  }



}
