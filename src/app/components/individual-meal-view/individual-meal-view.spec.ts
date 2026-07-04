import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMealView } from './individual-meal-view';

describe('IndividualMealView', () => {
  let component: IndividualMealView;
  let fixture: ComponentFixture<IndividualMealView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualMealView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualMealView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
