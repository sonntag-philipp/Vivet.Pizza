import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public get orderId(): string {
    if (this.sessionActive) {
      return localStorage.getItem('orderId');
    }
  }

  public set orderId(orderId: string) {
    localStorage.setItem('orderId', orderId);
    localStorage.setItem('timestamp', new Date().toString());
  }

  public get sessionActive(): boolean {
    const timestamp = localStorage.getItem(('timestamp'));
    if (!!timestamp) {
      const dayDiff = new Date().getDate() - new Date(timestamp).getDate();
      if (dayDiff >= 1) {
        localStorage.removeItem('timestamp');
        localStorage.removeItem('orderId');
        return false;
      }
      return !!localStorage.getItem('orderId');
    }
    return false;
  }
}
