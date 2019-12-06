import {Restaurant} from '../../shared/restaurant.model';
import {Dish} from '../../shared/dish.model';

export class Order {
  public timestamp: string;
  public id: string;
  public restaurant: Restaurant;
}
