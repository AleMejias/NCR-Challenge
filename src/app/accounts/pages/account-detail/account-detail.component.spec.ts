import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailComponent } from './account-detail.component';
import { SessionStorageService } from '../../services/session-storage.service';
import { AccountService } from '../../services/account.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormatBalancePipe } from '../../pipes/format-balance.pipe';
import { HandleTypeAccountPipe } from '../../pipes/handle-type-account.pipe';

class AccountMock {
  get = jasmine.createSpy('httpClient.get');
}
class SessionStorageMock {
  get = jasmine.createSpy('sessionStorage.get');
}

describe('AccountDetailComponent', () => {
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountDetailComponent ,FormatBalancePipe , HandleTypeAccountPipe ],
      imports: [ RouterTestingModule ],
      providers: [
        {
          provide: AccountService,
          useClass: AccountMock
        },
        {
          provide: SessionStorageService,
          useClass: SessionStorageMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AccountDetailComponent);
    const accountDetail = fixture.componentInstance;

    expect(accountDetail).toBeTruthy();
  });
});
