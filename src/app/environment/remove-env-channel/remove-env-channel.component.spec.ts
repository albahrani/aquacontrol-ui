import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveEnvChannelComponent } from './remove-env-channel.component';

describe('RemoveEnvChannelComponent', () => {
  let component: RemoveEnvChannelComponent;
  let fixture: ComponentFixture<RemoveEnvChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveEnvChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveEnvChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
