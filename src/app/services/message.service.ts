import { Injectable } from '@angular/core';
import { HttpInterceptorService } from "./http-interceptor.service";
import { Message } from "../model/message";
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
  url: string = 'api/message';

  constructor(private http: HttpInterceptorService) { }

  getMessage() : Observable<Message>{
    return this.http.get(this.url)
      .map(res => res.json());
  }

  postMessage(obj) : Observable<any>{
    return this.http.post(this.url, obj)
      .map(res => res.json());
  }
}
