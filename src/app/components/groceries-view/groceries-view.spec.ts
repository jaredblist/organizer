import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesView } from './groceries-view';

describe('GroceriesView', () => {
  let component: GroceriesView;
  let fixture: ComponentFixture<GroceriesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceriesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroceriesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
