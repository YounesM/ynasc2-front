import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Article} from "../model/article";
import 'rxjs/Rx';

@Injectable()
export class ArticleService {
  url: string = 'https://ynasc.ddns.net/api/articles';

  constructor(private http : Http) { }

  getArticles() : Observable<Article[]>{
    return this.http.get(this.url)
      .map(res => <Article[]>res.json());
  }
}
