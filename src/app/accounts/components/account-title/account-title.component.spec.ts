import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTitleComponent } from './account-title.component';

describe('AccountTitleComponent', () => {
  let component: AccountTitleComponent;
  let fixture: ComponentFixture<AccountTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
