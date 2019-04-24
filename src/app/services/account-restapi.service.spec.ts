import { TestBed } from '@angular/core/testing';

import { AccountRestapiService } from './account-restapi.service';

describe('AccountRestapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountRestapiService = TestBed.get(AccountRestapiService);
    expect(service).toBeTruthy();
  });
});
