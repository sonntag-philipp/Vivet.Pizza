import {Option} from './option.model';

export class Dish {
  public id: string;
  public name: string;
  public price: number;
  public ingredients: string[] = [];
  public options: Option[] = [];
  public description?: string;
}
