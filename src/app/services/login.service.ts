import { Injectable } from '@angular/core';
import {HttpInterceptorService} from "./http-interceptor.service";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
  url = 'api/auth';

  constructor(private http: HttpInterceptorService, private router: Router) { }

  login(user, pass) : Observable<any> {
    return this.http.post(this.url,{user:user, pass: pass})
      .map(res => res.json());
  }

  logout(){
    localStorage.removeItem('login');
    this.router.navigate(['/login']);
  }

  checkValidity() : Observable<any>{
    let token = JSON.parse(localStorage.getItem('login'));
    return this.http.post(this.url+'/validity',token)
      .map(res => res.json());
  }

}
