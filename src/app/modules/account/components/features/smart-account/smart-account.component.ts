import { Component, inject } from '@angular/core';
import { User } from '../../../../../models/user.model';
import { UserService } from '../../../../../shared/fetch-users.service';

@Component({
  selector: 'app-smart-account',
  templateUrl: './smart-account.component.html',
  styleUrl: './smart-account.component.scss',
})
export class SmartAccountComponent {
  userList: User[] = [];
  randomUser: any;
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersFromJsonFile) => {
      this.userList = usersFromJsonFile;
      console.log(this.userList);
      this.randomUser = Math.floor(Math.random() * this.userList.length);
      console.log(this.randomUser);
      return this.randomUser;
    });
  }
}
