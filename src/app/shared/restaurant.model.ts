import {Dish} from '../order/shared/dish.model';
import {Address} from './address.model';

export class Restaurant {
  public name: string;
  public id: string;
  public dishes: Dish[] = [];
  public addresses: Address[] = [];
}
