import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable, Output} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService{
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[]= [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat', 1),
      ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
          new Ingredient('Buns',3),
          new Ingredient('Meat', 2),
      ])
  ]
  getRecipes(){
    return this.recipes.slice();
  }
}
