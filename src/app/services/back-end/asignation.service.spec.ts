import { TestBed, inject } from '@angular/core/testing';

import { AsignationService } from './asignation.service';

describe('AsignationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsignationService]
    });
  });

  it('should be created', inject([AsignationService], (service: AsignationService) => {
    expect(service).toBeTruthy();
  }));
});
