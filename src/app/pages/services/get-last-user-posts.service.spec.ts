import { TestBed } from '@angular/core/testing';

import { GetLastUserPostsService } from './get-last-user-posts.service';

describe('GetLastUserPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLastUserPostsService = TestBed.get(GetLastUserPostsService);
    expect(service).toBeTruthy();
  });
});
