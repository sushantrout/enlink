import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMapComponent } from './transaction-map.component';

describe('TransactionMapComponent', () => {
  let component: TransactionMapComponent;
  let fixture: ComponentFixture<TransactionMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
