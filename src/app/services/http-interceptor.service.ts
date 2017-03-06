import { Injectable } from '@angular/core';
import {Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Request} from "@angular/http";
import {Observable} from "rxjs";
import {PreloaderService} from "./preloader.service";

@Injectable()
export class HttpInterceptorService extends Http {

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
    return super.get(url, option)
      .finally(() => { this.preloaderSrv.hidePreloader() });
  }

  post(url: string, body: any, options?:RequestOptionsArgs): Observable<Response> {
    this.preloaderSrv.showPreloader();
    console.log('Posting to the backend');
    return super.post(url, body, options)
      .finally(() => { this.preloaderSrv.hidePreloader() });
  }


}
