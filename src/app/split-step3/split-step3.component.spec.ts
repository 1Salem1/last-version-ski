import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStep3Component } from './split-step3.component';

describe('SplitStep3Component', () => {
  let component: SplitStep3Component;
  let fixture: ComponentFixture<SplitStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
