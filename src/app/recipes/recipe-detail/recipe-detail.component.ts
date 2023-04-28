import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() addToShoppingList = new EventEmitter<Ingredient[]>();

  constructor() { }

  ngOnInit() {
  }
  onClickToShoppingList(){
    console.log(this.recipe.ingredients);
    this.addToShoppingList.emit(this.recipe.ingredients);
  }

}
