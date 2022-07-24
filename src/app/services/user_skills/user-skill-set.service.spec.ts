import { TestBed } from '@angular/core/testing';

import { UserSkillSetService } from './user-skill-set.service';

describe('UserSkillSetService', () => {
  let service: UserSkillSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSkillSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
