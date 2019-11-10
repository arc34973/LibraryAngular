import { BorrowhistoryModule } from './../borrowhistory/borrowhistory.module';
import { BorrowhistoryService } from './../borrowhistory/borrowhistory.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { BorrowhistoryComponent } from 'app/borrowhistory/borrowhistory-list/borrowhistory-list.component';

@NgModule(
  {
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
    ],
  declarations: [UserAddComponent, UserDetailComponent, UserEditComponent, UserListComponent],
  providers: [UserService, BorrowhistoryService]
}
)

export class UsersModule { }
