import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected  = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Avocado Salad', 'This is the best avocado salad recipe you will ever try!', 'https://www.daskochrezept.de/sites/default/files/2017-07/radieschen-avocado-salat.jpg', [new Ingredient('Avocado', 5), new Ingredient('Tomato', 2), new Ingredient('Lemon', 2), new Ingredient('Chili', 0.5), new Ingredient('Green Onion', 1)]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Fried Egg plant', 'A very Special Georgian recipe', 'https://images.food52.com/jgt_ys1yX9bvCYfn_UIYXa5O7VE=/1200x1200/32d93023-0273-4d88-a671-550a332551af--2018-0516_warm-eggplant-and-mint-salad_3x2_rocky-luten_013.jpg', [new Ingredient('Eggplant', 3), new Ingredient('basil', 2), new Ingredient('Olive oil', 0.5), new Ingredient('Garlic', 1)]),

  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
