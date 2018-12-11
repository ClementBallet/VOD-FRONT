import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home-carousel-enfant',
  templateUrl: './home-carousel-enfant.component.html',
  styleUrls: ['./home-carousel-enfant.component.css'],
})

export class HomeCarouselEnfantComponent implements OnInit {

  @Input() categoryTitle: string;
  @Input() categoryId: number;

  images: any [];
  descriptions: any [];
  url: any;
  urlMovie: any;

  marginCaroussel = 0;
  nbMovie = 0;
  widthContent = 0;

  constructor(private http: HttpClient, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {

    this.url = 'http://127.0.0.1:8006/category/' + this.categoryId + '/movies';

    this.spinnerService.show();
    // ON RECUPERE LE DETAIL DU FILM
    this.http.get(this.url)
      .subscribe( (response: any) => {
        this.descriptions = response;
        this.nbMovie = this.descriptions.length;
        this.spinnerService.hide();
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

  redirectToMovie(idMovie) {
    this.urlMovie = '/movie/' + idMovie;
    this.router.navigate([this.urlMovie], { skipLocationChange: false });
  }
}
