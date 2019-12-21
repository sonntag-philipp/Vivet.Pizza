import {Address} from '@models/address.model';
import {Menu} from '@models/menu.model';

export class Restaurant {
  public id: number;
  public name: string;
  public addressId: number;
  public address: Address;
  public menuId: number;
  public menu: Menu;
}
