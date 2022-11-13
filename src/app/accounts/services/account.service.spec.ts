import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import { HttpClient } from '@angular/common/http';

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
/*     const fixture = TestBed.createComponent(AccountService);
    const accountSvc = fixture.componentInstance; */

    expect(service).toBeTruthy();
  });

});
