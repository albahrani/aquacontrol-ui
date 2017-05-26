import { TestBed, inject } from '@angular/core/testing';

import { LightEnvironmentService } from './light-environment.service';

describe('LightEnvironmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LightEnvironmentService]
    });
  });

  it('should be created', inject([LightEnvironmentService], (service: LightEnvironmentService) => {
    expect(service).toBeTruthy();
  }));
});
