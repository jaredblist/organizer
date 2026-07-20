import { Component } from '@angular/core';
import { MealService } from '../../services/meal/meal-service';
import { Meal } from '../../models/meals/meal.model';
import { IndividualMealView } from "../individual-meal-view/individual-meal-view";
import { LookupService } from '../../services/utility/lookup-service';
import { ComponentViewEnum } from '../../models/enums/component-view.model';

@Component({
  selector: 'app-meals-view',
  imports: [IndividualMealView],
  templateUrl: './meals-view.html',
  styleUrl: './meals-view.css',
})
export class MealsView {
  meals: Meal[] = [];  
  //voltroData: VoltroData[] = [];
  mealRows: Meal[][];
  mealCells: Meal[];
  selectedMeal: Meal;

  constructor(private mealService: MealService, private lookupService: LookupService) {

  }

  async ngOnInit() {    
    this.meals = this.lookupService.globalVar.meals;
    console.log(this.meals);
    this.setupDisplay();
  }

  goToMealPage(meal: Meal) {
    this.selectedMeal = meal;
  }

  getMealImage(meal: Meal) {
    return this.lookupService.getMealImage(meal.name);
  }

  goToAddMeal() {
    this.lookupService.componentView = ComponentViewEnum.AddMeal;
  }

  setupDisplay(): void {    
    this.mealCells = [];
    this.mealRows = [];

    var maxColumns = 3;

    for (var i = 1; i <= this.meals.length; i++) {
      this.mealCells.push(this.meals[i - 1]);
      if ((i % maxColumns) == 0) {
        this.mealRows.push(this.mealCells);
        this.mealCells = [];
      }
    }

    if (this.mealCells.length !== 0)
      this.mealRows.push(this.mealCells);
  }
}
