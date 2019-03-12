import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const newIngredientsAfterUpdate = state.ingredients.slice();
      newIngredientsAfterUpdate[state.editedIngredientIndex] = action.payload;

      return {
        ...state,
        ingredients: newIngredientsAfterUpdate,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const newIngredientsAfterDelete = state.ingredients.slice();
      newIngredientsAfterDelete.splice(state.editedIngredientIndex, 1);

      return {
        ...state,
        ingredients: newIngredientsAfterDelete,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActions.START_EDIT_INGREDIENT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload]}
      };
    case ShoppingListActions.STOP_EDIT_INGREDIENT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}