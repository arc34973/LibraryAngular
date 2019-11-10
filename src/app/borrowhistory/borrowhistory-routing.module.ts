import { BorrowhistoryComponent } from './borrowhistory-list/borrowhistory-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const borrowHistoryRoutes: Routes = [
  {path: 'borrowHistory/userId/:id', component: BorrowhistoryComponent},

  ];

@NgModule({
  imports: [RouterModule.forChild(borrowHistoryRoutes)],
  exports: [RouterModule]
})
export class BorrowhistoryRoutingModule { }
