import { User } from './../../users/user';
import { Router, ActivatedRoute } from '@angular/router';
import { BorrowhistoryService } from './../borrowhistory.service';
import { Component, OnInit } from '@angular/core';
import {Borrowhistory} from './../borrowhistory';

@Component({
  selector: 'app-borrowhistory-list',
  templateUrl: './borrowhistory-list.component.html',
  styleUrls: ['./borrowhistory-list.component.css']
})
export class BorrowhistoryComponent implements OnInit {
  errorMessage: string;
  borrowhistories: Borrowhistory[];
  // user: User;

  constructor(private route: ActivatedRoute, private router: Router, private borrowhistoryService: BorrowhistoryService) {
  }

  ngOnInit() {
    if (this.router.url.includes('userId')) {
      const userId = this.route.snapshot.params.id;
      this.borrowhistoryService.getBorrowhistoryByUserId(userId).subscribe(
      borrowhistories => this.borrowhistories = borrowhistories,
      error => this.errorMessage = error as any);
  }

    if (this.router.url.includes('bookId')) {
    const bookId = this.route.snapshot.params.id;
    this.borrowhistoryService.getBorrowhistoryByBookId(bookId).subscribe(
    borrowhistories => this.borrowhistories = borrowhistories,
    error => this.errorMessage = error as any);
}
}
}
