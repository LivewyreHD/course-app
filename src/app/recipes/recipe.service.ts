import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
		new Recipe('Tasty Schnitzel',
		 'A super-testy Schnitzel',
		  'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
		  [
		  	new Ingredient('Meat', 1),
		  	new Ingredient('French Fries', 20)
		  ])
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes () {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}