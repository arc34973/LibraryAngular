import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book;
  errorMessage: string;

  constructor(private bookService: BookService, private router: Router) {
    this.book = {} as Book;
  }

  ngOnInit() {
  }

  onSubmit(book: Book) {
    book.id = null;
    this.bookService.addBook(book).subscribe(
      newBook => {
        this.book = newBook;
        this.gotoBooksList();
      },
      error => this.errorMessage = error as any
    );
  }

  gotoBooksList() {
    this.router.navigate(['/books']);
  }

}
