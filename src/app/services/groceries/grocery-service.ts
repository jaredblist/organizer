import { Injectable } from '@angular/core';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import { Meal } from '../../models/meals/meal.model';
import { Ingredient } from '../../models/meals/ingredient.model';
import { GroceryItem } from '../../models/groceries/grocery-item.model';
import { GroceryList } from '../../models/groceries/grocery-list.model';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {

  async getGroceries() {  
      const snapshot = await getDoc(
          doc(db, 'groceryList', 'currentGroceries')
      );
  
      return snapshot.exists()
          ? snapshot.data() as GroceryList
          : null;  
    }
  
  async addToGroceries(meal: Meal) {  
      var currentGroceries = this.getGroceries();
      //add to this list and combine items instead of overwriting it but for now, just overwrite

      await setDoc(
      doc(db, 'groceryList', 'currentGroceries'),
      {
        groceryItems: meal.ingredients
      }
    );  
  }

  async saveGroceries(groceryList: GroceryList) {
  await setDoc(
    doc(db, 'groceryList', 'currentGroceries'),
    groceryList
  );
}
}
