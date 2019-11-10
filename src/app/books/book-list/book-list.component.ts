import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  errorMessage: string;
  books: Book[];

  constructor(private router: Router, private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      books => this.books = books,
      error => this.errorMessage = error as any);
  }

  onSelect(book: Book) {
    this.router.navigate(['/books', book.id]);
  }

  addUser() {
    this.router.navigate(['/books/add']);
  }

}

