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

  accountSelected( accountSelected: string ){

    console.log('SELECCIONASTE ESTE ',accountSelected)
    this.router.navigate(['/detail'] , { queryParams: { code :accountSelected } } );

  }

}
