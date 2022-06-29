import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiStep3Component } from './ski-step3.component';

describe('SkiStep3Component', () => {
  let component: SkiStep3Component;
  let fixture: ComponentFixture<SkiStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
