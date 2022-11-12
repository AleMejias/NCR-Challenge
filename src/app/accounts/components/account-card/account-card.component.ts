import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from '../../models/account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() account!: Cuenta;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Tiene como proposito pasarle mediante parametros de ruta y navegar al componente AccountDetail con la información que necesita
   * para recuperar la cuenta seleccionada por el usuario.
   * @param accountSelected => Número de cuenta seleccionado
   * @param accountCurrency => Tipo de moneda seleccionado
   */
  accountSelected( accountSelected: string , accountCurrency: string ){

    this.router.navigate(['/detail'] , { queryParams: { code :accountSelected , currency: accountCurrency} } );

  }

}
