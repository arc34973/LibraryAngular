import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowhistoryComponent } from 'app/borrowhistory/borrowhistory-list/borrowhistory-list.component';


const bookRoutes: Routes = [
  {path: 'books', component: BookListComponent},
  {path: 'books/add', component: BookAddComponent},
  {path: 'books/:id', component: BookDetailComponent},
  {path: 'books/:id/edit', component: BookEditComponent},
  {path: 'borrowHistory/bookId/:id', component: BorrowhistoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(bookRoutes)],
  exports: [RouterModule]
})

export class BooksRoutingModule {
}

