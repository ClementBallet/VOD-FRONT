import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-carousel-parent',
  templateUrl: './home-carousel-parent.component.html',
  styleUrls: ['./home-carousel-parent.component.css']
})
export class HomeCarouselParentComponent implements OnInit {

  categories = [];

  constructor() {
    this.categories = [
      'https://jsonplaceholder.typicode.com/postsgfdgfdgfdgmldfgdmflgmldfkgmlfkd',
      'https://jsonplaceholder.typicode.com/posts/1/comments',
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    ];
  }

  ngOnInit() {
  }

}
