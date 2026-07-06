import { Injectable } from '@angular/core';
import { ComponentViewEnum } from '../../models/enums/component-view.model';
import { GlobalVariables } from '../../models/global/global-variables.model';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  public globalVar = new GlobalVariables();
  public componentView = ComponentViewEnum.Main;

  getMealImage(mealName: string) {
   return "defaultMeal.png";
  }
}
