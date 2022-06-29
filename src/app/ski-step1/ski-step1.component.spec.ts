import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiStep1Component } from './ski-step1.component';

describe('SkiStep1Component', () => {
  let component: SkiStep1Component;
  let fixture: ComponentFixture<SkiStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
