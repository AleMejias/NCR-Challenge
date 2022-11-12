import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';

import { Cuenta } from '../../models/account';
import { PaginationService } from '../../services/pagination.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  accounts: Cuenta[]= [];
  accountsCopy: Cuenta[]= [];
  page_size: number = 5;
  current_page: number = 1;
  accumulated: number = 5;
  accounts_initial_length!: number;
  buttonNextDisabled!: boolean;
  buttonPreviousDisabled!: boolean;

  constructor(
    private accountsSvc: AccountService,
    private paginationSvc: PaginationService,
    private sessionStorageSvc: SessionStorageService,
  ) { }

  ngOnInit(): void {

    this.onLoadAccounts();
  }

  onLoadAccounts(){

    this.accountsSvc.getAllAccounts().subscribe({


      next: (accounts) => {

        this.accounts= accounts;
        this.accountsSvc.setAccountDetail( this.accounts );
        this.accounts_initial_length= this.accounts.length;
        const { cuentas , buttonNextDisabled , buttonPreviousDisabled } = this.paginationSvc.handlePagination( [...this.accounts],this.current_page);
        this.buttonNextDisabled = buttonNextDisabled;
        this.buttonPreviousDisabled = buttonPreviousDisabled;
        this.accountsCopy= cuentas;
        this.sessionStorageSvc.setAccountsInSessionStorage( accounts );

      }

    })

  }

  previousPage(){

    this.current_page-= 1;

    const { cuentas , buttonNextDisabled , buttonPreviousDisabled } = this.paginationSvc.handlePagination( [...this.accounts],this.current_page);
    this.buttonNextDisabled = buttonNextDisabled;
    this.buttonPreviousDisabled = buttonPreviousDisabled;
    this.accountsCopy= cuentas;


  }

  nextPage(){

    this.current_page+= 1;


    const { cuentas , buttonNextDisabled , buttonPreviousDisabled } = this.paginationSvc.handlePagination( [...this.accounts],this.current_page);
    this.buttonNextDisabled = buttonNextDisabled;
    this.buttonPreviousDisabled = buttonPreviousDisabled;
    this.accountsCopy= cuentas;
  }

}
