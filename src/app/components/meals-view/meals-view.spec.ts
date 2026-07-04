import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsView } from './meals-view';

describe('MealsView', () => {
  let component: MealsView;
  let fixture: ComponentFixture<MealsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealsView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
