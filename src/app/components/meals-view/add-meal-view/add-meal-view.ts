import { Component, inject } from '@angular/core';
import { Validators, FormBuilder, FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Unit } from '../../../models/meals/unit.model';
import { LookupService } from '../../../services/utility/lookup-service';
import { MealService } from '../../../services/meal/meal-service';
import { Meal } from '../../../models/meals/meal.model';
import { Ingredient } from '../../../models/meals/ingredient.model';
import { InitializationService } from '../../../services/utility/initialization-service';
import { ComponentViewEnum } from '../../../models/enums/component-view.model';

@Component({
  selector: 'app-add-meal-view',
  imports: [ReactiveFormsModule],
  templateUrl: './add-meal-view.html',
  styleUrl: './add-meal-view.css',
})
export class AddMealView {
  private fb = inject(FormBuilder);

  mealForm = this.fb.group({
    name: [''],
    ingredients: this.fb.array([])
  });

  units: Unit[];

  constructor(private lookupService: LookupService, private mealService: MealService) {
    this.addIngredient();
  }
  get ingredients(): FormArray {
    return this.mealForm.get('ingredients') as FormArray;
  }

  ngOnInit() {
    this.units = this.lookupService.globalVar.units;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      amount: [null, Validators.required],
      unit: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number) {
    if (this.ingredients.length > 1) {
      this.ingredients.removeAt(index);
    }
  }

  async saveMeal() {
    if (this.mealForm.invalid) {
      this.mealForm.markAllAsTouched();
      return;
    }

    const meal: Meal = {
      name: this.mealForm.value.name!,
      ingredients: this.mealForm.value.ingredients as Ingredient[]
    };

    await this.mealService.saveMeal(meal);

    this.lookupService.globalVar.meals = await this.mealService.getAllMeals();

    this.lookupService.componentView = ComponentViewEnum.Meals;
  }
}
