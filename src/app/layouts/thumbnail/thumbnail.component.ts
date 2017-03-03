import { Component, OnInit } from '@angular/core';

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
      { title: 'Lorem ipsum...', date: '1488532720', img: 'http://placehold.it/300x300', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa delectus dignissimos, dolor dolorem dolores eum ex facere inventore labore maiores natus omnis quos recusandae rerum ullam, ut voluptate voluptatum.' },
      { title: 'Lorem ipsum...', date: '1488532720', img: 'http://placehold.it/300x300', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa delectus dignissimos, dolor dolorem dolores eum ex facere inventore labore maiores natus omnis quos recusandae rerum ullam, ut voluptate voluptatum.' },
      { title: 'Lorem ipsum...', date: '1488532720', img: 'http://placehold.it/300x300', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa delectus dignissimos, dolor dolorem dolores eum ex facere inventore labore maiores natus omnis quos recusandae rerum ullam, ut voluptate voluptatum.' },
      { title: 'Lorem ipsum...', date: '1488532720', img: 'http://placehold.it/300x300', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa delectus dignissimos, dolor dolorem dolores eum ex facere inventore labore maiores natus omnis quos recusandae rerum ullam, ut voluptate voluptatum.' },
      { title: 'Lorem ipsum...', date: '1488532720', img: 'http://placehold.it/300x300', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa delectus dignissimos, dolor dolorem dolores eum ex facere inventore labore maiores natus omnis quos recusandae rerum ullam, ut voluptate voluptatum.' },
      { title: 'Lorem ipsum...', date: '1488532720', img: 'http://placehold.it/300x300', prev: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam culpa delectus dignissimos, dolor dolorem dolores eum ex facere inventore labore maiores natus omnis quos recusandae rerum ullam, ut voluptate voluptatum.' }
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
