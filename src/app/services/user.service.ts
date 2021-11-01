import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private uri = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.uri);
  }

  getUserById(id: number): Observable<User> {
    // Use <any> since what is returned from the uri is WAY different than our User.
    return this.http.get<any>(`${this.uri}/${id}`).pipe(
      tap((_) => console.log(`fetched user ${id}`)),
      map((_) => {
        let names = _.name.split(' ', 2);
        return {
          id: _.id,
          firstName: names[0],
          lastName: names[1],
          email: _.email,
          age: _.id,
        } as User;
      }),
      catchError(this.handleError<User>('getUserById'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

// const Users: User[] = [
//   { id: 11, firstName: 'Nice', lastName: 'Guys', age: 11, email: '' },
//   { id: 11, firstName: 'Doc', lastName: 'Holliday', age: 12, email: '' },
//   { id: 11, firstName: 'Billy', lastName: 'Kidd', age: 13, email: '' },
// ];
