import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiStep2Component } from './ski-step2.component';

describe('SkiStep2Component', () => {
  let component: SkiStep2Component;
  let fixture: ComponentFixture<SkiStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
