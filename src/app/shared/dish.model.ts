import {Option} from './option.model';

export class Dish {
  public id: number;
  public name: string;
  public price: number;
  public ingredients: string[] = [];
  public options: Option[] = [];
  public description?: string;
}
