import { PartsModule } from './parts/parts.module';
import { BorrowhistoryModule } from './borrowhistory/borrowhistory.module';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpErrorHandler} from './error.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PartsModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    BooksModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BorrowhistoryModule
  ],
  providers: [
    HttpErrorHandler,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
