import { TestBed } from '@angular/core/testing';
import { Cuenta } from '../models/account';

import { AccountService } from './account.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AccountService],
      providers: [HttpClient]
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AccountService);
    const accountSvc = fixture.componentInstance;

    expect(accountSvc).toBeTruthy();
  });

  it('Debería devolver un array de cuentas que solo contenga cuentas "CC" o "CA" y tipos de moneda distintos a "bs"' , () => {

    const fixture = TestBed.createComponent(AccountService);
    const accountSvc = fixture.componentInstance;
    const expectResult: Cuenta[] = [
      {
          "e": "1",
          "n": "872378326701",
          "t": "02",
          "saldo": "1500",
          "moneda": "u$s",
          "tipo_letras": "CC"
      },
      {
          "e": "1",
          "n": "872378326703",
          "t": "01",
          "saldo": "745",
          "moneda": "$",
          "tipo_letras": "CC"
      },
      {
          "e": "1",
          "n": "872378326704",
          "t": "01",
          "saldo": "852.36",
          "moneda": "$uy",
          "tipo_letras": "CA"
      },
      {
          "e": "1",
          "n": "872378326705",
          "t": "01",
          "saldo": "569",
          "moneda": "$",
          "tipo_letras": "CC"
      },
      {
          "e": "1",
          "n": "872378326706",
          "t": "01",
          "saldo": "2-5-0",
          "moneda": "$",
          "tipo_letras": "CA"
      },
      {
          "e": "1",
          "n": "872378326707",
          "t": "01",
          "saldo": "25000",
          "moneda": "$uy",
          "tipo_letras": "CC"
      },
      {
          "e": "1",
          "n": "872378326709",
          "t": "01",
          "saldo": "458",
          "moneda": "$",
          "tipo_letras": "CC"
      },
      {
          "e": "1",
          "n": " ",
          "t": "01",
          "saldo": "6458925",
          "moneda": "$",
          "tipo_letras": "CC"
      },
      {
          "e": "1",
          "n": "872378327823",
          "t": "11",
          "saldo": "250",
          "moneda": "$",
          "tipo_letras": "CA"
      },
      {
          "e": "1",
          "n": "872378327823",
          "t": "12",
          "saldo": "45",
          "moneda": "u$s",
          "tipo_letras": "CA"
      }
    ];

    accountSvc.getAllAccounts().subscribe(( response ) => expect(response).toEqual( expectResult ));



  });

});
