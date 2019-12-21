import {DishOption} from '@models/dish-option.model';

export class Dish {
  public id: number;
  public name: string;
  public price: number;
  public ingredients: string[] = [];
  public options: DishOption[] = [];
  public description?: string;
}
