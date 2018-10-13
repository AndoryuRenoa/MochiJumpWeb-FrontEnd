import { TestBed } from '@angular/core/testing';

import { ShowLogoutService } from './show-logout.service';

describe('ShowLogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowLogoutService = TestBed.get(ShowLogoutService);
    expect(service).toBeTruthy();
  });
});
