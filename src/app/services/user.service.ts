import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(Users);
  }

  getUserById(id: number): Observable<User> {
    const user = Users.find((i) => i.id === id);
    if (user) return of(user);

    return of(new User());
  }
}

const Users: User[] = [
  { id: 11, firstName: 'Nice', lastName: 'Guys', age: 11, email: '' },
  { id: 11, firstName: 'Doc', lastName: 'Holliday', age: 12, email: '' },
  { id: 11, firstName: 'Billy', lastName: 'Kidd', age: 13, email: '' },
];
