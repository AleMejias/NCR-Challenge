import { Pipe, PipeTransform } from '@angular/core';
import { Cuenta } from '../models/account';

export interface Pagination {

  cuentas: Cuenta[];
  endOfPage: boolean;
}

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(accounts: Cuenta[] ,current_page: number, accumulated: number): Cuenta[] {

    let page_size: number;
    let newAccountsArr: Cuenta[]= [...accounts];

    console.log('accounts tamaño ',accounts)
    console.log('ACCUMULATED',accumulated)
    if( current_page === 1 ) {
      console.log('IF  current_page === 1 ',accounts.length)
      page_size = 5;
      newAccountsArr = newAccountsArr.splice( 0 , page_size );
    }
    console.log('current_page',current_page)
    if( current_page > 1 ) {
      console.log('ENTRASTE EN ESTE IF')
      page_size = 4;
      newAccountsArr = newAccountsArr.splice( 0 , page_size );

    }
/*     if( accumulated <= accounts.length ) { page_size = 4; } */

    console.log('RESULTADO DE LA COPIA ',newAccountsArr)

    return newAccountsArr;
  }

}
