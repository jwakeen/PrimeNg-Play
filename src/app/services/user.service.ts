import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private uri = 'https://jsonplaceholder.typicode.com/users';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

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

  updateUser(user: User): Observable<User> {
    return this.http
      .put<User>(`${this.uri}/${user.id}`, user, this.httpOptions)
      .pipe(
        tap((_) => console.log(`updated user ${user.id}`)),
        catchError(this.handleError<User>('updateUser'))
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
