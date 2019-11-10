import { BorrowhistoryService } from './../../borrowhistory/borrowhistory.service';
import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  errorMessage: string;
  user: User;
  responseStatus: number;

  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService, private borrowHistoryService: BorrowhistoryService) {
    this.user = {} as User;
  }

  ngOnInit() {
    const userId = this.route.snapshot.params.id;
    this.userService.getUserById(userId).subscribe(
      user => this.user = user,
      error => this.errorMessage = error as any);
  }

  deleteUser(user: User) {
    const userId = this.route.snapshot.params.id;
    this.userService.deleteUser(user.id.toString()).subscribe(
      response => {
      this.responseStatus = response;
      this.gotoUsersList();
    },
      error => this.errorMessage = error as any);
    }

  /*  _showBorrowHistory(user: User) {
      const userId = this.route.snapshot.params.id;
  //    this.borrowHistoryService.getBorrowhistoryByUserId(userId).subscribe(
        response => {
             this.gotoBorrowHistory();
      },
        error => this.errorMessage = error as any);
      }*/


  gotoUsersList() {
    this.router.navigate(['/users']);
  }

  showBorrowHistory(user: User) {
    this.router.navigate(['/borrowHistory/userId', this.user.id]);
  }

  editUser() {
    this.router.navigate(['/users', this.user.id, 'edit']);
  }
}

