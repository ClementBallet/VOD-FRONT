import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {

  movieId: any;
  youtubeModal: any;
  dataUrl: any;
  data: any;
  urlTrailer: any;

  constructor(private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataUrl = 'http://localhost:8006/api/movies/' + this.movieId;

    this.http.get(this.dataUrl)
      .subscribe((response: any) => {
        this.data = response;
        this.urlTrailer = this.data.urlTrailer;
      });
  }

  showYoutubeModal() {
    this.youtubeModal = document.querySelector('.modal-box');

    this.youtubeModal.classList.add('show-youtube-modal');
  }
}
