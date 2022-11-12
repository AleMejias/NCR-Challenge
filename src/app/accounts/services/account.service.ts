import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Cuenta, Data } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /**
   * Utilizada como plantilla para saber que tipo de cuentas estan permitidas en mi aplicación
   */
  private allowedAccounts: string [] = ['CC','CA'];

  /**
   * Utilizada como plantilla para saber que tipo de monedas NO estan permitidas en mi aplicación
   */
  private noAllowedCurrency: string [] = ['bs'];
  accounts$ = new BehaviorSubject<Cuenta[]>([]);

  constructor(
    private http: HttpClient
  ) { }



  /**
   * Encargado de traer los datos desde la api
   * @returns Observable con los datos filtrados
   */
  getAllAccounts(): Observable<Cuenta[]> {

    return this.http.get<Data>('https://api.npoint.io/97d89162575a9d816661').pipe(
      map(( account ) => {
        const accounts = account.cuentas.filter(( element) => this.allowedAccounts.includes( element.tipo_letras ) && !this.noAllowedCurrency.includes(element.moneda));

        return accounts
      })
    )

  }

  /**
   * Recupera la cuenta que coincida con los parametros recibidos
   * @param accountNumber => número de cuenta seleccionado
   * @param accountCurrency => Tipo de moneda seleccionado
   * @returns un array con un elemento
   */
  getAccountDetail(accountNumber: string , accountCurrency: string ) { return this.accounts$.asObservable().pipe(
    map(( account ) => account.filter((element) => element.n === accountNumber && element.moneda === accountCurrency ))
  ) }

  /**
   *
   * @param accounts Metodo utilizado para guardar en un observable todas las cuentas recuperadas para posteriormente trabajar mejor con los datos desde cualquier lugar
   */
  setAccountDetail( accounts: Cuenta[] ) { this.accounts$.next( accounts ); }

}
