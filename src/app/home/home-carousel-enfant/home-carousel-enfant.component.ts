import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-carousel-enfant',
  templateUrl: './home-carousel-enfant.component.html',
  styleUrls: ['./home-carousel-enfant.component.css']
})
export class HomeCarouselEnfantComponent implements OnInit {

  images: any[];
  descriptions: any [];
  categories: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // ON RECUPERE DES IMAGES
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe( (response: any) => {
        this.images = response;
      });

    // ON RECUPERE LE CONTENU
    this.http.get('http://127.0.0.1:8006/api/movies')
      .subscribe( (response: any) => {
        this.descriptions = response['hydra:member'];
      });

    // ON RECUPERE LE CONTENU
    this.http.get('http://127.0.0.1:8006/api/categories')
      .subscribe( (response: any) => {
        this.categories = response['hydra:member'];
        console.log(this.categories);
      });
  }
}
