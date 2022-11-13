import { TestBed } from '@angular/core/testing';

import { SessionStorageService } from './session-storage.service';
import { AccountService } from './account.service';

class AccountMock {
  get = jasmine.createSpy('sessionStorage.get');
}

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SessionStorageService,
        {
          provide: AccountService,
          useClass: AccountMock
        }
      ]
    });
    service = TestBed.inject( SessionStorageService );
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
