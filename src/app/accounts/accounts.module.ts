import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountsListComponent } from './pages/accounts-list/accounts-list.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountDetailComponent } from './pages/account-detail/account-detail.component';
import { AccountTitleComponent } from './components/account-title/account-title.component';

import { HandleAccountNumberPipe } from './pipes/handle-account-number.pipe';
import { HandleTypeAccountPipe } from './pipes/handle-type-account.pipe';
import { FormatBalancePipe } from './pipes/format-balance.pipe';



@NgModule({
  declarations: [
    AccountsListComponent,
    AccountCardComponent,
    HeaderComponent,
    HandleTypeAccountPipe,
    HandleAccountNumberPipe,
    AccountDetailComponent,
    AccountTitleComponent,
    FormatBalancePipe
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
