import { BorrowhistoryComponent } from './borrowhistory-list/borrowhistory-list.component';
import { BorrowhistoryService } from './borrowhistory.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorrowhistoryRoutingModule } from './borrowhistory-routing.module';

@NgModule({
  declarations: [BorrowhistoryComponent],
  imports: [
    CommonModule,
    BorrowhistoryRoutingModule
  ],
  providers: [BorrowhistoryService]
})
export class BorrowhistoryModule { }
