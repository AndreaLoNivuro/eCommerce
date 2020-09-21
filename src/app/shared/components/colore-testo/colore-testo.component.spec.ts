import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoreTestoComponent } from './colore-testo.component';

describe('ColoreTestoComponent', () => {
  let component: ColoreTestoComponent;
  let fixture: ComponentFixture<ColoreTestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoreTestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoreTestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
