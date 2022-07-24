import { TestBed } from '@angular/core/testing';

import { ExperienceDetailsService } from './experience-details.service';

describe('ExperienceDetailsService', () => {
  let service: ExperienceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
