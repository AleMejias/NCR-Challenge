import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../services/account.service';

import { Cuenta } from '../../models/account';
import { PaginationService } from '../../services/pagination.service';

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
    private paginationSvc: PaginationService
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

//   handlePagination(accounts: Cuenta[] ,current_page: number, calledFrom: string = 'init'): Pagination {

//     let page_size: number;
//     let accounts_length: number = accounts.length;
//     let newAccountsArr: Cuenta[]= accounts;
//     let accumulated: number = 0;
//     let from!: number;
//     let to!: number;
//     let itemsPerPage!: number;
//     let buttonNextDisabled: boolean = true;
//     let buttonPreviousDisabled: boolean = false;

//     switch (calledFrom) {
//       case 'init':
//       console.log('CURRENT PAGE ',current_page)
//         if( current_page === 1 ) {
//           from = 0;
//           to = 5;
//           newAccountsArr = newAccountsArr.slice( from , to );
//         } else if( current_page === 2 ) {

//           itemsPerPage = 5;
//           to = current_page * itemsPerPage;
//           from = to  - itemsPerPage;
//           console.log('valores current_page === 2 ',from, to -1 )
//           newAccountsArr = newAccountsArr.slice( from , to -1);
//         }else  {
//           itemsPerPage = 5;
//           to = current_page * itemsPerPage;
//           from = ( to - 1 ) - itemsPerPage;
//           console.log('valores ',from,accounts_length)
//           newAccountsArr = newAccountsArr.slice( from , to );
//         }

//         console.log('accounts_length - from  === newAccountsArr.length',accounts_length - from,newAccountsArr.length )
//         if( accounts_length - from  === newAccountsArr.length ) { buttonNextDisabled = false; }



//       break;

//       default:
//         break;
//     }


// /*     console.log('accounts tamaño ',accounts)
//     console.log('ACCUMULATED',accumulated)
//     if( current_page === 1 ) {
//       console.log('IF  current_page === 1 ',accounts.length)
//       page_size = 5;
//       accumulated= 5;
//       newAccountsArr = newAccountsArr.splice( 0 , page_size );
//     } else if( current_page > 1 &&  this.accounts_initial_length > accumulated ) {
//       console.log('current_page',this.accounts_initial_length)
//       console.log('ENTRASTE EN ESTE IF')
//       page_size = 4;
//       accumulated += 5;
//       newAccountsArr = newAccountsArr.splice( accumulated + 1 , (accumulated +1 )+ page_size );

//     } else {

//       accumulated += 1;
//       newAccountsArr = newAccountsArr.splice( accumulated );

//     } */
// /*     if( accumulated <= accounts.length ) { page_size = 4; } */

//     console.log('RESULTADO DE LA COPIA ',newAccountsArr)

//     return {
//       cuentas: newAccountsArr,
//       buttonNextDisabled,
//       buttonPreviousDisabled
//     };
//   }

}
