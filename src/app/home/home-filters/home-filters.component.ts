import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-filters',
  templateUrl: './home-filters.component.html',
  styleUrls: ['./home-filters.component.css']
})
export class HomeFiltersComponent implements OnInit {

  years = [];

  constructor() {
    for (let i = 1950; i < 2000; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
  }

}
