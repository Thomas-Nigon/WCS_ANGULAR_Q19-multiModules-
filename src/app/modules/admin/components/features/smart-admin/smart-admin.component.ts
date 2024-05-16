import { Component, inject } from '@angular/core';
import { UserService } from '../../../../../shared/fetch-users.service';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-smart-admin',
  templateUrl: './smart-admin.component.html',
  styleUrl: './smart-admin.component.scss',
})
export class SmartAdminComponent {
  userList: User[] = [];
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersFromJsonFile) => {
      this.userList = usersFromJsonFile;
      console.log(this.userList);
    });
  }
}
