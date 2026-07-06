import { Meal } from "../meals/meal.model";
import { Tag } from "../meals/tag.model";
import { Unit } from "../meals/unit.model";

export class GlobalVariables {
    units: Unit[];
    tags: Tag[];
    meals: Meal[];
}
