import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  currentRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(clickRecipe: Recipe) {
    this.currentRecipe = clickRecipe;
  }
}
