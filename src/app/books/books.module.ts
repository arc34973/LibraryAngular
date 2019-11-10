import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { BooksRoutingModule } from './books-routing.module';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookAddComponent
  ],
  providers: [BookService]

})

export class BooksModule {
}
