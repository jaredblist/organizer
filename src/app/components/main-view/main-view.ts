import { Component } from '@angular/core';
import { LookupService } from '../../services/utility/lookup-service';
import { ComponentViewEnum } from '../../models/enums/component-view.model';
import { NgIf } from '@angular/common';
import { MealsView } from '../meals-view/meals-view';

@Component({
  selector: 'app-main-view',
  imports: [NgIf, MealsView],
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

  goToView() {//view: MenuNavigationEnum
    //this.lookupService.menuNavigation = view;
    this.lookupService.componentView = ComponentViewEnum.Meals;
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
