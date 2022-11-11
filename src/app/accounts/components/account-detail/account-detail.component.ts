import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Cuenta } from '../../models/account';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  accountDetail!: Cuenta;

  constructor(
    private accountsSvc: AccountService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe({

      next: ( response ) => {

        const {code} =  response;

         this.getAccountDetail( `${code}` )
      }

    });

  }

  getAccountDetail( accountNumber: string ) {


    this.accountsSvc.getAccountDetail(accountNumber).subscribe({
      next: (response) => {

        const [accountSelected] = response;
        this.accountDetail = accountSelected;

      }
    })

  }

}
