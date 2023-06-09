import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[]=[];
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChanges.subscribe(
      (ingredients)=>{this.ingredients=ingredients}
    )
  }

  // onIngredientAdded(ingredient: Ingredient) {
  //   this.shoppingListService.addIngredients(ingredient);
  //   // this.ingredients.push(ingredient);
  // }
}
