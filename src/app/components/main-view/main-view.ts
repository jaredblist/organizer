import { Component } from '@angular/core';
import { LookupService } from '../../services/utility/lookup-service';
import { ComponentViewEnum } from '../../models/enums/component-view.model';
import { MealsView } from '../meals-view/meals-view';
import { GroceriesView } from '../groceries-view/groceries-view';
import { AddMealView } from '../meals-view/add-meal-view/add-meal-view';

@Component({
  selector: 'app-main-view',
  imports: [MealsView, GroceriesView, AddMealView],
  templateUrl: './main-view.html',
  styleUrl: './main-view.css',
})
export class MainView {

  constructor(public lookupService: LookupService) {

  }


  public get componentViewEnum(): typeof ComponentViewEnum {
    return ComponentViewEnum;
  }

  ngOnInit() {

  }

  goToView(view: ComponentViewEnum) {//
    this.lookupService.componentView = view;
    //this.lookupService.componentView = ComponentViewEnum.Meals;
  }

  goBack() {
    /*else if (this.lookupService.menuNavigation === MenuNavigationEnum.WorkshopView || this.lookupService.menuNavigation === MenuNavigationEnum.FoundryView ||
      this.lookupService.menuNavigation === MenuNavigationEnum.PrismLabView || this.lookupService.menuNavigation === MenuNavigationEnum.TuningBayView)
      this.lookupService.menuNavigation = MenuNavigationEnum.StructuresView;    */
    //this.lookupService.menuNavigation = MenuNavigationEnum.MenuSelectView;

    this.lookupService.componentView = this.componentViewEnum.Main;
  }

  showBackButton() {
    if (this.lookupService.componentView === ComponentViewEnum.Main ||
      this.lookupService.componentView === ComponentViewEnum.None)
      return false;

    return true;
  }
}
