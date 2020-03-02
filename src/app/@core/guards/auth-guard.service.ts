import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkCredentials();
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    return this.checkCredentials();
  }

  private checkCredentials() {
    if (localStorage.getItem('tokenJWT') !== null) {
      return true;
    }
    console.log('check credentials not succesfull');
    return false;
  }
}
