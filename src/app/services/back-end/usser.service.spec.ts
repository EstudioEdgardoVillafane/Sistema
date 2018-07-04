import { TestBed, inject } from '@angular/core/testing';

import { UsserService } from './usser.service';

describe('UsserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsserService]
    });
  });

  it('should be created', inject([UsserService], (service: UsserService) => {
    expect(service).toBeTruthy();
  }));
});
