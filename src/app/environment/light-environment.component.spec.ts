import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightEnvironmentComponent } from './light-environment.component';

describe('LightEnvironmentComponent', () => {
  let component: LightEnvironmentComponent;
  let fixture: ComponentFixture<LightEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
