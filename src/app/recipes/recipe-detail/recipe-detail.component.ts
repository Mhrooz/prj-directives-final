import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';
import {Ingredient} from "../../shared/ingredient.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
  @Output() addToShoppingList = new EventEmitter<Ingredient[]>();

  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }
  onClickToShoppingList(){
    console.log(this.recipe.ingredients);
    this.addToShoppingList.emit(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

}
