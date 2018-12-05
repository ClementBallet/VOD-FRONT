import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  years = [];

  constructor() {
    for (let i = 1950; i < 2000; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
  }

}
