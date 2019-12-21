import {Restaurant} from '@models/restaurant.model';
import {Dish} from '@models/dish.model';

export class Order {
  public id?: string;
  public timestamp?: Date;
  public restaurantId: number;
  public restaurant?: Restaurant;
  public dishes?: Dish[] = [];
}
