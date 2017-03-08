import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private loginSrv: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.sessionValid();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(route, state);
  }

  sessionValid() : boolean {
    let session = JSON.parse(localStorage.getItem('login'));
    console.log(session && session.token)
    if (session && session.token) {
      this.loginSrv.checkValidity().subscribe(
        data => {
          if (JSON.parse(data.valid)){
            return true;
          }
          this.router.navigate(['/login']);
          return false;
        },
        err => {
          console.log(err);
          this.router.navigate(['/login']);
          return false;
        }
      );
    } else {
      this.router.navigate(['/login']);
    }
    return true;
  }

}
