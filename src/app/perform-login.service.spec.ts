import { TestBed } from '@angular/core/testing';

import { PerformLoginService } from './perform-login.service';

describe('PerformLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerformLoginService = TestBed.get(PerformLoginService);
    expect(service).toBeTruthy();
  });
});
