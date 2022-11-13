import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HandleAccountNumberPipe } from '../../pipes/handle-account-number.pipe';
import { HandleTypeAccountPipe } from '../../pipes/handle-type-account.pipe';

import { AccountCardComponent } from './account-card.component';

describe('AccountCardComponent', () => {
  let component: AccountCardComponent;
  let fixture: ComponentFixture<AccountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCardComponent ,HandleTypeAccountPipe , HandleAccountNumberPipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCardComponent);
    component = fixture.componentInstance;
    /* fixture.detectChanges(); */
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AccountCardComponent);
    const accountCard = fixture.componentInstance;

    expect(accountCard).toBeTruthy();
  });
});
