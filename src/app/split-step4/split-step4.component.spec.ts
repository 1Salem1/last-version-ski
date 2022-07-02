import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitStep4Component } from './split-step4.component';

describe('SplitStep4Component', () => {
  let component: SplitStep4Component;
  let fixture: ComponentFixture<SplitStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
