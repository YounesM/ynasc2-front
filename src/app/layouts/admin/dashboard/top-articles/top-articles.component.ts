import { Component, OnInit } from '@angular/core';
import {Article} from "../../../../model/article";
import {ArticleService} from "../../../../services/article.service";

@Component({
  selector: 'app-top-articles',
  templateUrl: './top-articles.component.html',
  styleUrls: ['./top-articles.component.css'],
  providers: [ ArticleService ]
})
export class TopArticlesComponent implements OnInit {
  top: Article[];

  constructor(private articleSrv: ArticleService) { }

  ngOnInit() {
    this.articleSrv.getTopArticles().subscribe(
      data => this.top = data,
      err => console.log(err)
    );
  }

}
