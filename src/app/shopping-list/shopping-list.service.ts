import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injectable, Output} from "@angular/core";

@Injectable()
export class ShoppingListService{
  @Output() ingredientChanges = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  public getIngredients(){
    return this. ingredients.slice();
  }
  public addIngredients(ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanges.emit(this.ingredients.slice());
  }
}
