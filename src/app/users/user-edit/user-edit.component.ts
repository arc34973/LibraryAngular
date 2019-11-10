import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  errorMessage: string; // server error message

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.user = {} as User;
  }

  ngOnInit() {
    const userId = this.route.snapshot.params.id;
    this.userService.getUserById(userId).subscribe(
      user => this.user = user,
      error => this.errorMessage = error as any);
  }

  onSubmit(user: User) {
    const that = this;
    this.userService.updateUser(user.id.toString(), user).subscribe(
      res => this.gotoUserDetail(user),
      error => this.errorMessage = error as any
    );
  }

  onSubmitDelete(user: User) {
    const that = this;
    this.userService.deleteUser(user.id.toString()).subscribe(
      res => this.gotoUserDetail(user),
      error => this.errorMessage = error as any
    );
  }



  gotoUserDetail(user: User) {
    this.errorMessage = null;
    this.router.navigate(['/users', user.id]);
  }

}
