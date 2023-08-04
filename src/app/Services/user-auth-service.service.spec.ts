import { TestBed } from '@angular/core/testing';

import { UserAuthServiceService } from './user-auth-service.service';

describe('UserAuthServiceService', () => {
  let service: UserAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
