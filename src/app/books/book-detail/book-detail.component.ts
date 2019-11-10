import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../book';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  errorMessage: string;
  book: Book;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {
    this.book = {} as Book;
  }

  ngOnInit() {
    const bookId = this.route.snapshot.params.id;
    this.bookService.getBookById(bookId).subscribe(
      book => this.book = book,
      error => this.errorMessage = error as any);
  }

  gotoBooksList() {
    this.router.navigate(['/books']);
  }


  showBorrowHistory(book: Book) {
    this.router.navigate(['/borrowHistory/bookId', this.book.id]);
  }

  editBook() {
    this.router.navigate(['/books', this.book.id, 'edit']);
  }

}


