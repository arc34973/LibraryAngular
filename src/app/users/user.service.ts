import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from '../error.service';


@Injectable()
export class UserService {

  entityUrl = environment.REST_API_LIBRARY_URL + 'users';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('UserService');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getUsers', []))
      );
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get<User>(this.entityUrl + '/' + userId)
      .pipe(
          catchError(this.handlerError('getUserById', {} as User))
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.entityUrl, user)
      .pipe(
        catchError(this.handlerError('addUser', user))
      );
  }

  updateUser(userId: string, user: User): Observable<{}> {
    return this.http.put<User>(this.entityUrl + '/' + userId, user)
      .pipe(
        catchError(this.handlerError('updateUser', user))
      );
  }

  deleteUser(userId: string): Observable<number> {
    return this.http.delete<number>(this.entityUrl + '/' + userId)
      .pipe(
         catchError(this.handlerError('deleteUser', 0))
      );
  }


}
