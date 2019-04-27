import { TestBed } from '@angular/core/testing';

import { WalletRestapiService } from './wallet-restapi.service';

describe('WalletRestapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalletRestapiService = TestBed.get(WalletRestapiService);
    expect(service).toBeTruthy();
  });
});
