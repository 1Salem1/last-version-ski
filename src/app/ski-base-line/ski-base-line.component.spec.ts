import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiBaseLineComponent } from './ski-base-line.component';

describe('SkiBaseLineComponent', () => {
  let component: SkiBaseLineComponent;
  let fixture: ComponentFixture<SkiBaseLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiBaseLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkiBaseLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
