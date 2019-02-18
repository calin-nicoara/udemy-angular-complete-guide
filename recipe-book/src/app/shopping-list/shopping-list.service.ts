import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  ingredientAddedSubject = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  editIngredient(updatedIngredient: Ingredient, index: number) {
    this.ingredients[index] = updatedIngredient;
    this.refreshIngredients()
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.refreshIngredients();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.refreshIngredients();
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.refreshIngredients();
  }

  private refreshIngredients() {
    this.ingredientAddedSubject.next(this.ingredients.slice());
  }
}