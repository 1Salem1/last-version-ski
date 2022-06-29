import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiStep4Component } from './ski-step4.component';

describe('SkiStep4Component', () => {
  let component: SkiStep4Component;
  let fixture: ComponentFixture<SkiStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
