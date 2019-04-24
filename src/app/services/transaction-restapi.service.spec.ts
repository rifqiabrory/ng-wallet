import { TestBed } from '@angular/core/testing';

import { TransactionRestapiService } from './transaction-restapi.service';

describe('TransactionRestapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionRestapiService = TestBed.get(TransactionRestapiService);
    expect(service).toBeTruthy();
  });
});
