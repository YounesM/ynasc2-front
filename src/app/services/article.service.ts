import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Article } from "../model/article";
import 'rxjs/Rx';
import {HttpInterceptorService} from "./http-interceptor.service";

@Injectable()
export class ArticleService {
  url: string = 'api/article';

  constructor(private http : HttpInterceptorService) { }

  getArticles(page?) : Observable<Article[]>{
    return this.http.get(this.url+'s', page)
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

  getLastArticles() : Observable<any> {
    return this.http.get(this.url+'s'+'/last')
      .map(res => res.json());
  }

  getTopArticles() : Observable<any> {
    return this.http.get(this.url+'s' +'/top')
      .map(res => res.json());
  }

}
