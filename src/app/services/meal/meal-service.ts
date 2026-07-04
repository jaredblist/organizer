import { Injectable } from '@angular/core';
import { db } from '../../firebaseconfig';

import {
    collection,
    getDocs,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';
import { Meal } from '../../models/meals/meal.model';


@Injectable({
  providedIn: 'root',
})
export class MealService {
  async getAllMeals() {
    const snapshot = await getDocs(
        collection(db, 'meals')
    );

    return snapshot.docs.map(d => d.data());
  }
  
  async getMeal(name: string) {

    const snapshot = await getDoc(
        doc(db, 'meals', name)
    );

    return snapshot.exists()
        ? snapshot.data()
        : null;

  }

async saveMeal(meal: Meal) {

    await setDoc(
        doc(db, 'meals', meal.name),
        meal
    );

}
}
