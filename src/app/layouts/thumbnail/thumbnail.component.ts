import { Component, OnInit } from '@angular/core';
import {Article} from "../../classes/article";

@Component({
  selector: 'app-thumbnail',
  templateUrl: 'thumbnail.component.html',
  styleUrls: ['thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
  thumbnails: any[];

  constructor() {
    //REST Call
    this.thumbnails = [
      new Article(1,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(2,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(3,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(4,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(5,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(6,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(7,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
      new Article(8,"Title","http://placehold.it/300x300",'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate aliquet malesuada. Suspendisse hendrerit, purus at viverra dignissim, metus quam scelerisque nunc, sed luctus lectus augue vel est. Praesent at tempor elit, et consequat nulla. Praesent ac vulputate quam, vel hendrerit purus. Donec luctus quam ut nibh viverra egestas', '1488560787'),
    ]
  }

  onClick(){
    /*
      Should send POST to article/:id/ and navigate to the route
     */
  }

  ngOnInit() {
  }

}
