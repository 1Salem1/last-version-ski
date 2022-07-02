import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitboardBaseLineComponent } from './splitboard-base-line.component';

describe('SplitboardBaseLineComponent', () => {
  let component: SplitboardBaseLineComponent;
  let fixture: ComponentFixture<SplitboardBaseLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitboardBaseLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitboardBaseLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
