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

  constructor(private http: HttpClient) {
    for (let i = 1950; i < 2018; i++) {
      this.years.push(i);
    }
  }

  onSelect() {
    this.select = document.getElementById('select-category');
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8006/api/categories')
      .subscribe( (response: any) => {
        this.categories = response['hydra:member'];
    });
  }
}
