import { Injectable } from '@nestjs/common';

import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';

const array = [
  {
    id: 'ttest',
    title: 'test',
    creationDate: new Date(),
    ingredients: [],
  },
];

@Injectable()
export class RecipesService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    console.log(data);

    array.push({ ...data, id: 'test', creationDate: new Date() });
    return { ...data, id: 'test' } as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return array;
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
