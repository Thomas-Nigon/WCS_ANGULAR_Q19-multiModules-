import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  constructor() {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/users.json');
  }
}
