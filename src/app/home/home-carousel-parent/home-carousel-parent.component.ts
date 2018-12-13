import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-carousel-parent',
  templateUrl: './home-carousel-parent.component.html',
  styleUrls: ['./home-carousel-parent.component.css']
})
export class HomeCarouselParentComponent implements OnInit {

  categories: any [];
  moviesByCategory: any;
  urlApi = 'http://127.0.0.1:8006/api/';
  urlAllCat = this.urlApi + 'categories';
  urlSingleCat = this.urlApi + 'movies?cat=';

  selectCat = null;
  selectCatName = '';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.initListener();

    this.filterByCategory();
  }


  initListener() {
    this.selectCat = document.querySelector('#select-category');

    this.selectCat.addEventListener('change', () => {
      if (this.selectCatName.length === 0) {
        this.selectCatName += this.selectCat.value;
        console.log('variable passée au carousel parent : ', this.selectCatName);
      } else {
        this.selectCatName = this.selectCat.value;
        console.log('variable passée au carousel parent : ', this.selectCatName);
      }

      this.filterByCategory();
    });
  }

// TODO : func filtrer par cat
    filterByCategory() {
      if (this.selectCatName.length === 0) {
        this.allCategories();
      } else {
        this.singleCategory();
      }
    }


    allCategories() {
      this.http.get(this.urlAllCat)
        .subscribe((response: any) => {
          this.categories = response['hydra:member'];
          console.log('all cat : ', this.categories);
        });
    }

    singleCategory() {
      this.urlSingleCat +=  this.selectCatName;

      console.log('Cat sélectionnée : ', this.selectCatName);

      this.http.get(this.urlSingleCat)
        .subscribe((response: any) => {
          this.moviesByCategory = response;
          console.log('moviesByCategory : ', this.moviesByCategory);
        });
    }
}
