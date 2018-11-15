import { TestBed } from '@angular/core/testing';

import { GetUserLevelsService } from './get-user-levels.service';

describe('GetUserLevelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserLevelsService = TestBed.get(GetUserLevelsService);
    expect(service).toBeTruthy();
  });
});
