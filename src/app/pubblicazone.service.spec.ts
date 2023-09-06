import { TestBed } from '@angular/core/testing';

import { PubblicazoneService } from './pubblicazone.service';

describe('PubblicazoneService', () => {
  let service: PubblicazoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubblicazoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
