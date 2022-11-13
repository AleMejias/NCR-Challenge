import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Cuenta } from '../../models/account';
import { AccountService } from '../../services/account.service';
import { PaginationService } from '../../services/pagination.service';
import { SessionStorageService } from '../../services/session-storage.service';

import { AccountsListComponent } from './accounts-list.component';

class AccountMock {
  get = jasmine.createSpy('account.getAllAccounts');
}
class SessionStorageMock {
  get = jasmine.createSpy('sessionStorage.get');
}
class PaginationMock {
  get = jasmine.createSpy('pagination.get');
}

describe('AccountsListComponent', () => {
  let component: AccountsListComponent;
  let fixture: ComponentFixture<AccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsListComponent ],
      providers: [
        {
          provide: AccountService,
          useValue: {
            getEvents: () => of([]),
            processEvents: () => of([]),
            currentEvents: of('events')
          },
          useClass: AccountMock,

        },
        {
          provide: SessionStorageService,
          useClass: SessionStorageMock
        },
        {
          provide: PaginationService,
          useClass: PaginationMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsListComponent);
    component = fixture.componentInstance;
    /* fixture.detectChanges(); */
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AccountsListComponent);
    const accountsList = fixture.componentInstance;

    expect(accountsList).toBeTruthy();
  });

});
