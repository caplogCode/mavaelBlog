import { TestBed } from '@angular/core/testing';

import { MavaelService } from './mavael.service';

describe('MavaelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MavaelService = TestBed.get(MavaelService);
    expect(service).toBeTruthy();
  });
});
