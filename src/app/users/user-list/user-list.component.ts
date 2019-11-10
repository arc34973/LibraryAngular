import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  errorMessage: string;
  users: User[];

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = error as any);
  }

  onSelect(user: User) {
    this.router.navigate(['/users', user.id]);
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

}

