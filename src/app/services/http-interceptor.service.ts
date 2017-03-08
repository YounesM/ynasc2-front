import { Injectable } from '@angular/core';
import {Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Request, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {PreloaderService} from "./preloader.service";
import {AppConstants} from "../app.constants";

@Injectable()
export class HttpInterceptorService extends Http {
  domain : string = AppConstants.APP_DOMAIN;

  constructor(
    backend: ConnectionBackend,
    defaultOption: RequestOptions,
    private preloaderSrv: PreloaderService
  ) {
    super(backend, defaultOption);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, option?: RequestOptionsArgs): Observable<any> {
    this.preloaderSrv.showPreloader();
    return super.get(this.domain + url, option)
      .finally(() => { this.preloaderSrv.hidePreloader() });
  }

  post(url: string, body: any, options?:RequestOptionsArgs): Observable<Response> {
    this.preloaderSrv.showPreloader();
    return super.post(this.domain + url, body, options)
      .finally(() => { this.preloaderSrv.hidePreloader() });
  }

  setTokenHeader() : Headers {
    let header = new Headers();
    let token;

    JSON.parse(localStorage.getItem('login')) ? token = JSON.parse(localStorage.getItem('login')).token : null;

    if(token){
      console.log(token);
      header.append('x-auth-token',token);
    }

    return header;
  }
}
