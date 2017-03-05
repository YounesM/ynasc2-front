import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Article } from "../model/article";
import 'rxjs/Rx';
import {HttpInterceptorService} from "./http-interceptor.service";

@Injectable()
export class ArticleService {
  url: string = 'https://ynasc.ddns.net/api/articles';

  constructor(private http : HttpInterceptorService) { }

  getArticles(page?) : Observable<Article[]>{
    return this.http.get(this.url, page)
      .map(res => <Article[]>res.json());
  }

  postArticle(article) : Observable<any> {
    return this.http.post(this.url, article);
  }

  getArticle(id) : Observable<any> {
    const articleUrl = this.url + '/' + id;
    return this.http.get(articleUrl)
      .map(res => <Article>res.json())
  }

}
