import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Cuenta, Data } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private allowedAccounts: string [] = ['CC','CA'];
  private noAllowedCurrency: string [] = ['bs'];

  constructor(
    private http: HttpClient
  ) { }



  getAllAccounts(): Observable<Cuenta[]> {

    return this.http.get<Data>('https://api.npoint.io/97d89162575a9d816661').pipe(
      map(( account ) => {
        return account.cuentas.filter(( element) => this.allowedAccounts.includes( element.tipo_letras ) && !this.noAllowedCurrency.includes(element.moneda))
      })
    )

  }
}
