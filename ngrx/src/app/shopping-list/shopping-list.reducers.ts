import {Action} from '@ngrx/store';
import {Ingredient} from '../shared/ingredient.model';

export const

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListReducer(state = initialState, action: Action) {
  // switch (action.type) {
  //   case
  // }
  return state;
}