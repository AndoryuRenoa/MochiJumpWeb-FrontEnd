import { TestBed } from '@angular/core/testing';

import { ShowLoginService } from './show-login.service';

describe('ShowLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowLoginService = TestBed.get(ShowLoginService);
    expect(service).toBeTruthy();
  });
});
