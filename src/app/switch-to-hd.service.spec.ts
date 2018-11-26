import { TestBed } from '@angular/core/testing';

import { SwitchToHdService } from './switch-to-hd.service';

describe('SwitchToHdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchToHdService = TestBed.get(SwitchToHdService);
    expect(service).toBeTruthy();
  });
});
