import {Dish} from '../../shared/dish.model';
import {Restaurant} from '../../shared/restaurant.model';

export class Menu {
  public version: string;
  public restaurant: Restaurant;
  public dishes: Dish[] = [];
}
