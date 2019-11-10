import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  errorMessage: string; // server error message

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.book = {} as Book;
  }

  ngOnInit() {
    const bookId = this.route.snapshot.params.id;
    this.bookService.getBookById(bookId).subscribe(
      book => this.book = book,
      error => this.errorMessage = error as any);
  }

  onSubmit(book: Book) {
    const that = this;
    this.bookService.updateBook(book.id.toString(), book).subscribe(
      res => this.gotoBookDetail(book),
      error => this.errorMessage = error as any
    );
  }

  gotoBookDetail(book: Book) {
    this.errorMessage = null;
    this.router.navigate(['/books', book.id]);
  }

}

