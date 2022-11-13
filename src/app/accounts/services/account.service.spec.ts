import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { HttpClient } from '@angular/common/http';
import { Cuenta, Data } from '../models/account';
import { map ,pipe} from 'rxjs';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('AccountService', () => {
  let service: AccountService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(AccountService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

//   it('Debe de recibir un array de cuentas que solo permita : Cuentas de tipo "CC" y "CA", y tipos de moneda distintos a "bs"', () => {
//     const fixture = TestBed.createComponent(AccountService);
//     const accountsSvc = fixture.componentInstance;
// /*     const result: Cuenta[] = [
//       {
//           "e": "1",
//           "n": "872378326701",
//           "t": "02",
//           "saldo": "1500",
//           "moneda": "u$s",
//           "tipo_letras": "CC"
//       },
//       {
//           "e": "1",
//           "n": "872378326703",
//           "t": "01",
//           "saldo": "745",
//           "moneda": "$",
//           "tipo_letras": "CC"
//       },
//       {
//           "e": "1",
//           "n": "872378326704",
//           "t": "01",
//           "saldo": "852.36",
//           "moneda": "$uy",
//           "tipo_letras": "CA"
//       },
//       {
//           "e": "1",
//           "n": "872378326705",
//           "t": "01",
//           "saldo": "569",
//           "moneda": "$",
//           "tipo_letras": "CC"
//       },
//       {
//           "e": "1",
//           "n": "872378326706",
//           "t": "01",
//           "saldo": "2-5-0",
//           "moneda": "$",
//           "tipo_letras": "CA"
//       },
//       {
//           "e": "1",
//           "n": "872378326707",
//           "t": "01",
//           "saldo": "25000",
//           "moneda": "$uy",
//           "tipo_letras": "CC"
//       },
//       {
//           "e": "1",
//           "n": "872378326709",
//           "t": "01",
//           "saldo": "458",
//           "moneda": "$",
//           "tipo_letras": "CC"
//       },
//       {
//           "e": "1",
//           "n": " ",
//           "t": "01",
//           "saldo": "6458925",
//           "moneda": "$",
//           "tipo_letras": "CC"
//       },
//       {
//           "e": "1",
//           "n": "872378327823",
//           "t": "11",
//           "saldo": "250",
//           "moneda": "$",
//           "tipo_letras": "CA"
//       },
//       {
//           "e": "1",
//           "n": "872378327823",
//           "t": "12",
//           "saldo": "45",
//           "moneda": "u$s",
//           "tipo_letras": "CA"
//       }
//     ] */

//     accountsSvc.getAllAccounts().subscribe((response) => {


//       expect(response).toEqual(result);

//     })

//   });

/*   it('Debe de recibir un array de cuentas que solo permita : Cuentas de tipo "CC" y "CA", y tipos de moneda distintos a "bs"',
  (done: DoneFn) => {
    let allowedAccounts: string [] = ['CC','CA'];
    let noAllowedCurrency: string [] = ['bs'];

    service.getAllAccounts().subscribe(( response ) => {

      const result: Cuenta[] = [
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
      ]
      expect(response).toEqual(result);
      done();


    })
  }); */

});
