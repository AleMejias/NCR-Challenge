import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Subject ,BehaviorSubject} from 'rxjs';
import { Cuenta, Data } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private allowedAccounts: string [] = ['CC','CA'];
  private noAllowedCurrency: string [] = ['bs'];
  accounts$ = new BehaviorSubject<Cuenta[]>([]);

  constructor(
    private http: HttpClient
  ) { }



  getAllAccounts(): Observable<Cuenta[]> {

    return this.http.get<Data>('https://api.npoint.io/97d89162575a9d816661').pipe(
      map(( account ) => {
        const accounts = account.cuentas.filter(( element) => this.allowedAccounts.includes( element.tipo_letras ) && !this.noAllowedCurrency.includes(element.moneda));

/*         this.accounts= accounts; */
        return accounts
      })
    )

  }

  getAccountDetail(accountNumber: string) { return this.accounts$.asObservable().pipe(
    map(( account ) => account.filter((element) => element.n === accountNumber))
  ) }

  setAccountDetail( accounts: Cuenta[] ) { this.accounts$.next( accounts ); }

/*   getAccountDetail( accountNumber: string ) { console.log(this.accounts) } */
}
