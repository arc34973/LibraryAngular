import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HandleError, HttpErrorHandler } from './../error.service';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  entityUrl = environment.REST_API_LIBRARY_URL + 'books';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('BookService');
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getBooks', []))
      );
  }

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(this.entityUrl + '/' + bookId)
      .pipe(
          catchError(this.handlerError('getBookById', {} as Book))
      );
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.entityUrl, book)
      .pipe(
        catchError(this.handlerError('addBook', book))
      );
  }

  updateBook(bookId: string, book: Book): Observable<{}> {
    return this.http.put<Book>(this.entityUrl + '/' + bookId, book)
      .pipe(
        catchError(this.handlerError('updateBook', book))
      );
  }

  deleteBook(bookId: string): Observable<{}> {
    return this.http.delete<Book>(this.entityUrl + '/' + bookId)
      .pipe(
         catchError(this.handlerError('deleteBook', [bookId]))
      );
  }
}
