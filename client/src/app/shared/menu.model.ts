import {Category} from '@models/category.model';
import {Dish} from '@models/dish.model';

export class Menu {
  public id: number;
  public version: Date;
  public categories: Category[] = [];
  public dishes: Dish[] = [];
}
