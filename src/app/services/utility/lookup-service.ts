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
    console.log(mealName);
    mealName = mealName.toLowerCase();

    if (mealName === "spaghetti")
      return "spaghetti.png";
    if (mealName === "butter chicken")
      return "butterchicken.png";
    if (mealName === "sausage and potato soup")
      return "sausageandpotatosoup.png";
    if (mealName.includes("coq au vin"))
      return "coqauvin.png";
    if (mealName === "mushroom quesadillas")
      return "mushroomquesadillas.png";
    if (mealName === "lemony chicken turmeric" || mealName === "lemony turmeric chicken")
      return "lemonyturmericchicken.png";
    if (mealName === "sweet potato enchiladas")
      return "sweetpotatoenchiladas.png";
    

   return "defaultMeal.png";
  }
}
