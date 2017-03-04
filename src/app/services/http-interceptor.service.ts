import { Injectable } from '@angular/core';
import {Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Request} from "@angular/http";
import {LoaderService} from "./loader.service";
import {Observable} from "rxjs";

@Injectable()
export class HttpInterceptorService extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOption: RequestOptions,
    private loaderSrv: LoaderService
  ) {
    super(backend, defaultOption);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options);
  }

  get(url: string, option?: RequestOptionsArgs): Observable<any> {
    //do something
    console.log('Interceptor is working');
    return super.get(url, option)
  }

  post(url: string, body: any, options?:RequestOptionsArgs): Observable<Response> {
    //do something
    console.log('Posting to the backend');
    return super.post(url, body, options);
  }


}
