import { Component } from '@angular/core';
import { GroceryService } from '../../services/groceries/grocery-service';
import { GroceryItem } from '../../models/groceries/grocery-item.model';
import { GroceryList } from '../../models/groceries/grocery-list.model';

@Component({
  selector: 'app-groceries-view',
  imports: [],
  templateUrl: './groceries-view.html',
  styleUrl: './groceries-view.css',
})
export class GroceriesView {
  groceryList: GroceryList | null;

  constructor(private groceryService: GroceryService) {

  }

  async ngOnInit() {
    this.groceryList = await this.groceryService.getGroceries();   
    
    if (this.groceryList === null)
      return;
  }
}
