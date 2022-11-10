import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { HeaderComponent } from './components/header/header.component';
import { HandleTypeAccountPipe } from './pipes/handle-type-account.pipe';
import { HandleAccountNumberPipe } from './pipes/handle-account-number.pipe';



@NgModule({
  declarations: [
    AccountsListComponent,
    AccountCardComponent,
    HeaderComponent,
    HandleTypeAccountPipe,
    HandleAccountNumberPipe
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class AccountsModule { }
