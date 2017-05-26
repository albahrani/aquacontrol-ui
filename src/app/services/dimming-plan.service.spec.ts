import { TestBed, inject } from '@angular/core/testing';

import { DimmingPlanService } from './dimming-plan.service';

describe('DimmingPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DimmingPlanService]
    });
  });

  it('should be created', inject([DimmingPlanService], (service: DimmingPlanService) => {
    expect(service).toBeTruthy();
  }));
});
