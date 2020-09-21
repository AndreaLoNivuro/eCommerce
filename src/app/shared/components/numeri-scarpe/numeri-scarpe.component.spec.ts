import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeriScarpeComponent } from './numeri-scarpe.component';

describe('NumeriScarpeComponent', () => {
  let component: NumeriScarpeComponent;
  let fixture: ComponentFixture<NumeriScarpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumeriScarpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeriScarpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
