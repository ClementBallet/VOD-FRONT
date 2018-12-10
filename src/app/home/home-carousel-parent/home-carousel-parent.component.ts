import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-carousel-parent',
  templateUrl: './home-carousel-parent.component.html',
  styleUrls: ['./home-carousel-parent.component.css']
})
export class HomeCarouselParentComponent implements OnInit {

  allCategories: any[];
  categories: any [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8006/api/categories')
      .subscribe( (response: any) => {
        this.allCategories = response['hydra:member'];
        this.categories = this.allCategories;
      });

    this.categories = [''];
  }
}
