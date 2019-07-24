import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingFinanceComponent } from './trying-finance.component';

describe('TryingFinanceComponent', () => {
  let component: TryingFinanceComponent;
  let fixture: ComponentFixture<TryingFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryingFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryingFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
