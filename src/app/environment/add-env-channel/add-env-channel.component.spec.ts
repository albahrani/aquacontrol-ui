import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnvChannelComponent } from './add-env-channel.component';

describe('AddEnvChannelComponent', () => {
  let component: AddEnvChannelComponent;
  let fixture: ComponentFixture<AddEnvChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnvChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnvChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
