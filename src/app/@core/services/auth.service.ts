import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Router } from '@angular/router';
import { meData } from '@core/graphql/operations/query';
import { CurrentRouterService } from './current-router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessVar = new Subject<boolean>();
  public accessVar$ = this.accessVar.asObservable();
  public userVar = new Subject<any>();
  public userVar$ = this.userVar.asObservable();
  defaultRoute = '/home';
  currentRouterUrl: string;
  constructor(private apollo: Apollo, private currentRouter: CurrentRouterService,
              private router: Router) {
                this.currentRouter.currentUrl$.subscribe((url: string) => {
                  this.currentRouterUrl = url;
                });
              }

  public updateStateSession(newValue: boolean) {
    this.accessVar.next(newValue);
  }
  public updateUser(newValue: any) {
    this.userVar.next(newValue);
  }

  logout() {
    this.updateStateSession(false);
    localStorage.removeItem('tokenJWT');
    // console.log('rrr0', this.currentRouterUrl);
    if (this.currentRouterUrl === '/admin' || this.currentRouterUrl.indexOf('/admin/') > -1) {
      console.log('logout in admin');
      this.router.navigate([this.defaultRoute]);
    }
  }

  private sincroValues(result: any, state: boolean) {
    this.updateStateSession(state);
    this.updateUser(result);
  }

  start() {
    if (localStorage.getItem('tokenJWT') !== null ) {
      this.getMe().subscribe((result: any) => {
        this.sincroValues(result, result.status);
        // console.log(this.currentRouterUrl);
      });
    } else { // No hay token
      this.sincroValues(null, false);
    }
  }
  // Obtener nuestro usuario y datos con el token
  getMe() {
    return this.apollo
    .watchQuery(
      {
        query: meData,
        fetchPolicy: 'network-only',
        context: {
          headers: new HttpHeaders({
            authorization: localStorage.getItem('tokenJWT')
          })
        }
      }
    ).valueChanges.pipe(map((result: any) => {
      return result.data.me;
    }));
  }
}
