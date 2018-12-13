import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-filters',
  templateUrl: './home-filters.component.html',
  styleUrls: ['./home-filters.component.css']
})
export class HomeFiltersComponent implements OnInit {

  categories: any[];
  years = [];
  select: any;
  hideCategoryTitle = false;
  hideOrderTitle = true;
  hideYearsTitle = true;


  constructor(private http: HttpClient) {
    for (let i = 1950; i < 2019; i++) {
      this.years.push(i);
    }
  }

  onSelect() {
    this.select = document.getElementById('select-category');
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.http.get('http://127.0.0.1:8006/api/categories')
      .subscribe( (response: any) => {
        this.hideCategoryTitle = true;
        this.categories = response['hydra:member'];
      });
  }

  hideNotesTitleFunc() {
    this.hideOrderTitle = false;
  }

  hideYearsTitleFunc(){
    this.hideYearsTitle = false;
  }
}
