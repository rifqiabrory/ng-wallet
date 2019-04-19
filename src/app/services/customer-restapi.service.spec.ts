import { TestBed } from '@angular/core/testing';

import { CustomerRestapiService } from './customer-restapi.service';

describe('CustomerRestapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerRestapiService = TestBed.get(CustomerRestapiService);
    expect(service).toBeTruthy();
  });
});
