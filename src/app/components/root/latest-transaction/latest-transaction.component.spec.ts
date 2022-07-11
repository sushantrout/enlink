import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTransactionComponent } from './latest-transaction.component';

describe('LatestTransactionComponent', () => {
  let component: LatestTransactionComponent;
  let fixture: ComponentFixture<LatestTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
