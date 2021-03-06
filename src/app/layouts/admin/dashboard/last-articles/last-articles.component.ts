import { Component, OnInit } from '@angular/core';
import { Article } from "../../../../model/article";
import { ArticleService } from "../../../../services/article.service";

@Component({
  selector: 'app-last-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css'],
  providers: [ ArticleService ]
})
export class LastArticlesComponent implements OnInit {
  last: Article[];

  constructor(private articleSrv: ArticleService) { }

  ngOnInit() {
    this.articleSrv.getLastArticles().subscribe(
      data => this.last = data,
      err => console.log(err)
    );
  }

}
