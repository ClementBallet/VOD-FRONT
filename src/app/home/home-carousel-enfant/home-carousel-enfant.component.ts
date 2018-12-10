import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-carousel-enfant',
  templateUrl: './home-carousel-enfant.component.html',
  styleUrls: ['./home-carousel-enfant.component.css'],
})

export class HomeCarouselEnfantComponent implements OnInit {

  images: any[];
  descriptions: any [];
  categories: any[];

  marginCaroussel = 0;
  nbMovie = 0;
  widthContent = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // ON RECUPERE LE DETAIL DU FILM
    this.http.get('http://127.0.0.1:8006/api/movies')
      .subscribe( (response: any) => {
        this.descriptions = response['hydra:member'];
        this.nbMovie = this.descriptions.length;
        console.log('nbMovie = this.descriptions.length', this.nbMovie);
    });
  }

  moveLeft() {
    this.marginCaroussel += 400;

    if (this.marginCaroussel > 0) {
      this.marginCaroussel = 0;
    }
  }

  moveRight() {
    this.marginCaroussel -= 400;

    this.widthContent = (330 * this.nbMovie);

    if (this.marginCaroussel < -this.widthContent) {
      this.marginCaroussel = -this.widthContent + 330;
    }
  }
}
