import {Option} from './option.model';

export class Dish {
  public name: string;
  public description: string;
  public price: number;
  public ingredients: string[] = [];
  public options: Option[] = [];
}
