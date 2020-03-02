import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentRouterService {
  public currentUrl = new Subject<string>();
  public currentUrl$ = this.currentUrl.asObservable();
  public updateCurrentUrl(newUrl: string) {
    this.currentUrl.next(newUrl);
  }
}
