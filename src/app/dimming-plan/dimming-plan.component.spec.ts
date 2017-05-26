import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimmingPlanComponent } from './dimming-plan.component';

describe('DimmingPlanComponent', () => {
  let component: DimmingPlanComponent;
  let fixture: ComponentFixture<DimmingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimmingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimmingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
