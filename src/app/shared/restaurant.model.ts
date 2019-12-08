import {Dish} from './dish.model';
import {Address} from './address.model';

export class Restaurant {
  public name: string;
  public id: number;
  public dishes: Dish[] = [];
  public address: Address;
}
