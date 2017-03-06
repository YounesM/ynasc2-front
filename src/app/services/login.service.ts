import { Injectable } from '@angular/core';
import {HttpInterceptorService} from "./http-interceptor.service";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
  url = 'https:ynasc.ddns.net/api/auth';

  constructor(private http: HttpInterceptorService) { }

  login(user, pass) : Observable<any> {
    return this.http.post(this.url,{user:user, pass: pass})
      .map(res => res.json());
  }

}
