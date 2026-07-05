import { Component } from '@angular/core';
import { MealService } from '../../services/meal/meal-service';
import { Meal } from '../../models/meals/meal.model';

@Component({
  selector: 'app-meals-view',
  imports: [],
  templateUrl: './meals-view.html',
  styleUrl: './meals-view.css',
})
export class MealsView {
  meals: Meal[] = [];  
  //voltroData: VoltroData[] = [];
  mealRows: Meal[][];
  mealCells: Meal[];

  constructor(private mealService: MealService) {

  }

  async ngOnInit() {    
    this.meals = await this.mealService.getAllMeals();
    console.log(this.meals);
    this.setupDisplay();
  }

  goToMealPage(meal: Meal) {

  }

  getMealImage(meal: Meal) {

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
