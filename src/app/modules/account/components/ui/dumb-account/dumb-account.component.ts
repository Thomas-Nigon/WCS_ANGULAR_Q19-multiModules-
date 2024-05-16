import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/user.model';

@Component({
  selector: 'app-dumb-account',
  templateUrl: './dumb-account.component.html',
  styleUrl: './dumb-account.component.scss',
})
export class DumbAccountComponent {
  @Input() userList: User[] = [];
  @Input() randomUser: number = 1;
}
