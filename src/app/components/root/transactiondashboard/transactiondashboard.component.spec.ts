import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiondashboardComponent } from './transactiondashboard.component';

describe('TransactiondashboardComponent', () => {
  let component: TransactiondashboardComponent;
  let fixture: ComponentFixture<TransactiondashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactiondashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactiondashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
