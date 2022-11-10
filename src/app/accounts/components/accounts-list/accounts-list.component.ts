import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';

import { Cuenta } from '../../models/account';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  accounts: Cuenta[]= [];

  constructor(
    private accountsSvc: AccountService
  ) { }

  ngOnInit(): void {


    this.onLoadAccounts();

  }

  onLoadAccounts(){

    this.accountsSvc.getAllAccounts().subscribe({


      next: (accounts) => {

        this.accounts= accounts;

      }

    })

  }
}
