import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowhistoryComponent } from 'app/borrowhistory/borrowhistory-list/borrowhistory-list.component';

const userRoutes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'users/:id/edit', component: UserEditComponent},
  {path: 'borrowHistory/userId/:id', component: BorrowhistoryComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
