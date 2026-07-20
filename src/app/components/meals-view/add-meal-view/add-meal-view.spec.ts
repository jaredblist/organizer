import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMealView } from './add-meal-view';

describe('AddMealView', () => {
  let component: AddMealView;
  let fixture: ComponentFixture<AddMealView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMealView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMealView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
