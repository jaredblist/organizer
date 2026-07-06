import { Component, Input } from '@angular/core';
import { Meal } from '../../models/meals/meal.model';
import { LookupService } from '../../services/utility/lookup-service';

@Component({
  selector: 'app-individual-meal-view',
  imports: [],
  templateUrl: './individual-meal-view.html',
  styleUrl: './individual-meal-view.css',
})
export class IndividualMealView {
  @Input() selectedMeal: Meal;
  editIngredients = false;

  constructor(private lookupService: LookupService)
  {

  }
  
  getMealImage() {
    return this.lookupService.getMealImage(this.selectedMeal.name);
  }

  getMealIngredients() {
    
  }

  toggleMode() {
    this.editIngredients = !this.editIngredients;
  }

  saveIngredients() {
    

    this.toggleMode();
  }
}
