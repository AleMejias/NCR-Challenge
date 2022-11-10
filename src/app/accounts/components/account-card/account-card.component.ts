import { Component, Input, OnInit } from '@angular/core';
import { Cuenta } from '../../models/account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {

  @Input() account!: Cuenta;

  constructor() { }

  ngOnInit(): void {
  }

}
