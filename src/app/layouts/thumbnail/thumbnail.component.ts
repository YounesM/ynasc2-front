import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-thumbnail',
  templateUrl: 'thumbnail.component.html',
  styleUrls: ['thumbnail.component.css'],
  providers: [ArticleService]
})
export class ThumbnailComponent implements OnInit {
  thumbnails: any[];

  constructor(private articleSrv: ArticleService,
              public sharedSrv: SharedService,
              private router: Router) { }

  onClick(article){
    /*
      Should send POST to article/:id/:title and navigate to the route
     */
    this.sharedSrv.setClickedArticle(article.id);
    this.router.navigate(['article',article.id, article.urlTitle])
  }

  ngOnInit() {
    this.articleSrv.getArticles().subscribe(
      data => this.thumbnails = data,
      err => console.log(err)
    );
  }

}
