import { Injectable } from '@angular/core';
import { LookupService } from './lookup-service';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebaseconfig';
import { Tag } from '../../models/meals/tag.model';
import { Unit } from '../../models/meals/unit.model';
import { MealService } from '../meal/meal-service';

@Injectable({
  providedIn: 'root',
})
export class InitializationService {
  constructor(private lookupService: LookupService, private mealService: MealService) {

  }

  async preloadData() {
    this.lookupService.globalVar.meals = await this.mealService.getAllMeals();
    this.lookupService.globalVar.tags = await this.getAllTags();
    this.lookupService.globalVar.units = await this.getAllUnits();
  }

  //need to add all tags and units from db, then you can display them in a dropdown
  async getAllTags() {
      const snapshot = await getDocs(
          collection(db, 'tags')
      );
  
      return snapshot.docs.map(d => d.data() as Tag);
    }

    async getAllUnits() {
      const snapshot = await getDocs(
          collection(db, 'units')
      );
  
      return snapshot.docs.map(d => d.data() as Unit);
    }
}
