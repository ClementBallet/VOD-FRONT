import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  images: any[];
  descriptions: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // ON RECUPERE DES IMAGES
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe((response: any) => {
        this.images = response;
      });

    // ON RECUPERE LE CONTENU
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response: any) => {
        this.descriptions = response;
      });
  }
}
