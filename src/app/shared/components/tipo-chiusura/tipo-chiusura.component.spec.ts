import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoChiusuraComponent } from './tipo-chiusura.component';

describe('TipoChiusuraComponent', () => {
  let component: TipoChiusuraComponent;
  let fixture: ComponentFixture<TipoChiusuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoChiusuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoChiusuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
