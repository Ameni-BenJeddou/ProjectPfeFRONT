import { TestBed } from '@angular/core/testing';

import { SAppService } from './s-app.service';

describe('SAppService', () => {
  let service: SAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
