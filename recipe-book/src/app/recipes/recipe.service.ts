import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({providedIn: 'root'})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService){}

  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Pasta Carbonara',
      description: 'Delicious pasta',
      imagePath: 'https://goo.gl/ohuAWw',
      ingredients: [
        new Ingredient('Pasta', 10),
        new Ingredient('Bacon', 3)
      ]
    },
    {
      id: 2,
      name: 'Burger',
      description: 'Delicious Burger',
      imagePath: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      ingredients: [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 1)
        ]
    }
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  findRecipe(id: number): Recipe {
    return this.recipes.find(recipe => recipe.id === id)
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}