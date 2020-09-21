import { TestBed } from '@angular/core/testing';

import { PersonalizzaService } from './personalizza.service';

describe('PersonalizzaService', () => {
  let service: PersonalizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
