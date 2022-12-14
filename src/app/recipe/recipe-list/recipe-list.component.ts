import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is recipe demo','https://www.pngitem.com/pimgs/m/235-2354731_recipes-png-transparent-png.png'),
    
    new Recipe('A Test Recipe','This is recipe demo','https://www.pngitem.com/pimgs/m/235-2354731_recipes-png-transparent-png.png')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
