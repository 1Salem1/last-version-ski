import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiStep5Component } from './ski-step5.component';

describe('SkiStep5Component', () => {
  let component: SkiStep5Component;
  let fixture: ComponentFixture<SkiStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
