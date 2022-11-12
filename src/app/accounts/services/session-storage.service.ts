import { Injectable } from '@angular/core';
import { Cuenta } from '../models/account';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(
    private AccountsSvc:AccountService
  ) { }


  setAccountsInSessionStorage( accounts: Cuenta[] ){

    sessionStorage.setItem("accounts", JSON.stringify( accounts ));

  }

  getAccountsFromSessionStorage(){


    if( window.sessionStorage.getItem('accounts') !== undefined ) {

      const accounts = JSON.parse(sessionStorage.getItem("accounts") || "");


      this.AccountsSvc.accounts$.next( accounts );
    }

  }

}
