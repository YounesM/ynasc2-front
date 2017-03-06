import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("Guard is guarding");
    return this.sessionValid();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("Children guarding ...");
    return this.canActivate(route, state);
  }

  sessionValid() : boolean {
    let session = localStorage.getItem('login');
    if (session) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
