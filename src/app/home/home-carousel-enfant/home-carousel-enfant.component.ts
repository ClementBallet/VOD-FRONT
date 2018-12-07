import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-carousel-enfant',
  templateUrl: './home-carousel-enfant.component.html',
  styleUrls: ['./home-carousel-enfant.component.css'],
  animations: [

  ]
})
export class HomeCarouselEnfantComponent implements OnInit {

  images: any[];
  descriptions: any [];
  categories: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // ON RECUPERE LE DETAIL DU FILM
    this.http.get('http://127.0.0.1:8006/api/movies')
      .subscribe( (response: any) => {
        this.descriptions = response['hydra:member'];
    });
  }
}
