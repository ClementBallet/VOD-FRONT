import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-pricing',
  templateUrl: './movie-pricing.component.html',
  styleUrls: ['./movie-pricing.component.css']
})
export class MoviePricingComponent implements OnInit {

  @Input() moviePricing;

  constructor() { }

  ngOnInit() {
  }

}
