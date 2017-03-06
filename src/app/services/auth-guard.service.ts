import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor() { }

  canActivate(){
    console.log("Guard is guarding");
    return false;
  }

}
