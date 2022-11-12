import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Cuenta } from '../../models/account';

import { AccountService } from '../../services/account.service';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  accountDetail!: Cuenta;
  accountNumber: string = "";
  accountCurrency: string = "";

  constructor(
    private accountsSvc: AccountService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private sessionStorageSvc: SessionStorageService
  ) { }

  ngOnInit(): void {

    /* Me suscribo a los cambios en la url para tener los valores de la ultima cuenta y moneda seleccionados */
    this.activatedRoute.queryParams.subscribe({

      next: ( response ) => {
        const { code , currency } =  response;
        this.accountNumber = code;
        this.accountCurrency = currency;

         this.getAccountDetail( `${code}` , `${currency}`)
      }

    });

  }

  /**
   * Se encarga de a partir de los valores recibidos, comunicarse con el observable que almacena el array de cuentas
   * para extraer la cuenta que coincida con el "accountNumber" y "accountCurrency" recibido como parametro
   * @param accountNumber => Nñumero de cuenta seleccionado
   * @param accountCurrency => Tipo de moneda seleccionado
   */
  getAccountDetail( accountNumber: string , accountCurrency : string) {


    this.sessionStorageSvc.getAccountsFromSessionStorage();
    this.accountsSvc.getAccountDetail(accountNumber , accountCurrency).subscribe({
      next: (response) => {

        const [accountSelected] = response;

        this.accountDetail = accountSelected;

      }
    })

  }

  goBack(){

    this.location.back();

  }

}
