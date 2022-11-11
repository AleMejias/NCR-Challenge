import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HandleTypeAccountPipe } from './pipes/handle-type-account.pipe';
import { HandleAccountNumberPipe } from './pipes/handle-account-number.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountTitleComponent } from './components/account-title/account-title.component';



@NgModule({
  declarations: [
    AccountsListComponent,
    AccountCardComponent,
    HeaderComponent,
    HandleTypeAccountPipe,
    HandleAccountNumberPipe,
    PaginationPipe,
    AccountDetailComponent,
    AccountTitleComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  exports: [
    HeaderComponent,
    AccountTitleComponent
  ]
})
export class AccountsModule { }
