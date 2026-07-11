import { Component } from '@angular/core';
import { GroceryService } from '../../services/groceries/grocery-service';
import { GroceryItem } from '../../models/groceries/grocery-item.model';
import { GroceryList } from '../../models/groceries/grocery-list.model';
import { LookupService } from '../../services/utility/lookup-service';
import { CategoryOption } from '../../models/meals/category-option.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groceries-view',
  imports: [FormsModule],
  templateUrl: './groceries-view.html',
  styleUrl: './groceries-view.css',
})
export class GroceriesView {
  groceryList: GroceryList | null;
  categories: CategoryOption[];

  constructor(private groceryService: GroceryService, private lookupService: LookupService) {

  }

  async ngOnInit() {
    this.groceryList = await this.groceryService.getGroceries();

    if (this.groceryList === null)
      return;

    this.categories = this.lookupService.globalVar.categories;
    console.log(this.categories);
  }

  getItemsForCategory(categoryName: string) {
    return this.groceryList?.groceryItems?.filter(
      item => item.category === categoryName
    ) ?? [];
  }

  async itemCheckedChanged(item: GroceryItem, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    item.checked = checkbox.checked;

    if (this.groceryList) {
      await this.groceryService.saveGroceries(this.groceryList);
    }
  }

  async toggleItem(item: GroceryItem) {
    item.checked = !item.checked;

    if (this.groceryList) {
      await this.groceryService.saveGroceries(this.groceryList);
    }
  }
}
