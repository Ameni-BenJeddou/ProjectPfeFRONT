import { TestBed } from '@angular/core/testing';

import { EducationDetailsService } from './education-details.service';

describe('EducationDetailsService', () => {
  let service: EducationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
