import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-thumbnail',
  templateUrl: 'thumbnail.component.html',
  styleUrls: ['thumbnail.component.css'],
  providers: [ArticleService]
})
export class ThumbnailComponent implements OnInit {
  thumbnails: any[];

  constructor(private articleSrv: ArticleService) {

  }

  onClick(){
    /*
      Should send POST to article/:id/ and navigate to the route
     */
  }

  ngOnInit() {
    this.articleSrv.getArticles().subscribe(
      data => this.thumbnails = data,
      err => console.log(err)
    );
  }

}
