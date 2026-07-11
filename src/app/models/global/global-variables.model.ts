import { CategoryOption } from "../meals/category-option.model";
import { Meal } from "../meals/meal.model";
import { Tag } from "../meals/tag.model";
import { Unit } from "../meals/unit.model";

export class GlobalVariables {
    units: Unit[];
    tags: Tag[];
    meals: Meal[];
    categories: CategoryOption[];

    constructor() {
        this.units = [];
        this.tags = [];
        this.meals = [];
        this.categories = [];
    }
}
