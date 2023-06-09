import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import {RecipeService} from "./recipe.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]

})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private slService:ShoppingListService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe)=>{
        this.selectedRecipe = recipe;
      }
    )
  }
  sendIngredientsToSl(ingredients: Ingredient[]){
    console.log(ingredients);
    for (const ingredient of ingredients) {
      console.log(ingredient);
      this.slService.addIngredients(ingredient);
    }
  }

}
