import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-dumb-admin',
  templateUrl: './dumb-admin.component.html',
  styleUrl: './dumb-admin.component.scss',
})
export class DumbAdminComponent {
  @Input() userList: User[] = [];
}
