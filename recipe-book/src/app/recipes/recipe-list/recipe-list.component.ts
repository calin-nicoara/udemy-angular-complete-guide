import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeClickedEmitter = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pasta Carbonara', 'Delicious pasta', 'https://goo.gl/ohuAWw'),
    new Recipe('Pasta Carbonara 2', 'Delicious pasta 2', 'https://goo.gl/ohuAWw')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipeClickedEmitter.emit(recipe);
  }
}
