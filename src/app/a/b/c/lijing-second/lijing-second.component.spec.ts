import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LijingSecondComponent } from './lijing-second.component';

describe('LijingSecondComponent', () => {
  let component: LijingSecondComponent;
  let fixture: ComponentFixture<LijingSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LijingSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LijingSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
