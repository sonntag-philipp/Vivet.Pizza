import {Restaurant} from '../../shared/restaurant.model';
import {Dish} from './dish.model';

export class Order {
  public id: string;
  public restaurant: Restaurant;
  public dishes: Dish[] = [];
}
