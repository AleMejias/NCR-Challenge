import { Injectable } from '@angular/core';
import { Cuenta } from '../models/account';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }


  handlePagination(accounts: Cuenta[] ,current_page: number ): Pagination{

    let page_size: number;
    let accounts_length: number = accounts.length;
    let newAccountsArr: Cuenta[]= accounts;
    let from!: number;
    let to!: number;
    let itemsPerPage!: number;
    let buttonNextDisabled: boolean = true;

    if( current_page === 1 ) {

      from = 0;
      to = 5;
      newAccountsArr = newAccountsArr.slice( from , to );

    } else if( current_page === 2 ) {

      itemsPerPage = 5;
      to = current_page * itemsPerPage;
      from = to  - itemsPerPage;

      newAccountsArr = newAccountsArr.slice( from , to -1);

    } else  {
      itemsPerPage = 5;
      to = current_page * itemsPerPage;
      from = ( to - 1 ) - itemsPerPage;

      newAccountsArr = newAccountsArr.slice( from , to );
    }


    if( accounts_length - from  === newAccountsArr.length ) { buttonNextDisabled = false; }


    return {
      cuentas: newAccountsArr,
      buttonNextDisabled
    };
  }
}
