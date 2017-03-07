import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  article : any;

  constructor(private articleSrv: ArticleService, public sharedSrv: SharedService) { }

  ngOnInit() {
    const id = this.sharedSrv.getClickedArticle();

    this.article = this.articleSrv.getArticle(id).subscribe(
      data => this.article = data,
      err => console.log(err)
    )
  }

}
