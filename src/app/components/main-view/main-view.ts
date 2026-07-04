import { Component } from '@angular/core';
import { LookupService } from '../../services/utility/lookup-service';
import { ComponentViewEnum } from '../../models/enums/component-view.model';

@Component({
  selector: 'app-main-view',
  imports: [],
  templateUrl: './main-view.html',
  styleUrl: './main-view.css',
})
export class MainView {

  constructor(private lookupService:  LookupService) {

  }

  ngOnInit() {

  }

  goToView() {//view: MenuNavigationEnum
    //this.lookupService.menuNavigation = view;
    this.lookupService.componentView = ComponentViewEnum.Meals;
  }
}
