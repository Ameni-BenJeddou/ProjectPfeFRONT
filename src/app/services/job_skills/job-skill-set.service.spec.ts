import { TestBed } from '@angular/core/testing';

import { JobSkillSetService } from './job-skill-set.service';

describe('JobSkillSetService', () => {
  let service: JobSkillSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSkillSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
