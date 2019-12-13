import {Dish} from '@models/dish.model';
import {Menu} from '@models/menu.model';

export class Category {
  public id: number;
  public name: string;
  public dishes: Dish[] = [];
  public menuId: number;
  public menu: Menu;
}
