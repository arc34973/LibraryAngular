import { Book } from '../books/book';
import { Observable } from 'rxjs';
import { Borrowhistory } from './borrowhistory';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from '../error.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User } from '../users/user';
@Injectable()
export class BorrowhistoryService {

  entityUrl = environment.REST_API_LIBRARY_URL + 'borrowHistory';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('BorrowhistoryService');
  }

    getBorrowhistoryByUserId(userId: any): Observable<Borrowhistory[]> {
    return this.http.get<Borrowhistory[]>(this.entityUrl + '/userId/' + userId)
      .pipe(
          catchError(this.handlerError('getBorrowhistoryByUserId', []))
      );
  }

   getBorrowhistoryByBookId(bookId: string): Observable<Borrowhistory[]> {
    return this.http.get<Borrowhistory[]>(this.entityUrl + '/bookId/' + bookId)
      .pipe(        catchError(this.handlerError('getBorrowhistoryByBookId', []))
      );
   }
}
