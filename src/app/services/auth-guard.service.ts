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
    if (session && session.token) {
      console.log("Checking validity");
      //TODO : Check token validity
      this.loginSrv.checkValidity().subscribe(
        data => {
          console.log('data arrived')
          if (JSON.parse(data.valid)){
            console.log(data);
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
    }
    return true;
  }

}
