import {OnChanges, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit, OnChanges {

  movieId: any;
  youtubeModal: any;
  dataUrl: any;
  data: any;
  urlTrailer: any;

  overlayBackground: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private spinnerService: Ng4LoadingSpinnerService) {  }

  ngOnChanges() {
    console.log(this.urlTrailer);
  }

  ngOnInit() {

    this.movieId = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataUrl = 'http://localhost:8006/api/movies/' + this.movieId;
    console.log('this.dataUrl : ', this.dataUrl);
    this.spinnerService.show();
    this.http.get(this.dataUrl)
      .subscribe((response: any) => {
        this.data = response;
        this.urlTrailer = this.data.urlTrailer;
        console.log('this.data: ', this.data);
        console.log('this.urlTrailer: ', this.urlTrailer);
        this.spinnerService.hide();
      });
  }

  showYoutubeModal() {
    this.spinnerService.show();

    this.youtubeModal = document.querySelector('.modal-box');
    this.youtubeModal.classList.add('show-youtube-modal');

    this.overlayBackground = document.querySelector('.overlay');
    this.overlayBackground.classList.add('overlayBackground');

    this.spinnerService.hide();
  }

  hideYoutubeModalByOverlay() {
    this.youtubeModal = document.querySelector('.modal-box');
    this.youtubeModal.classList.remove('show-youtube-modal');

    this.overlayBackground = document.querySelector('.overlay');
    this.overlayBackground.classList.remove('overlayBackground');
  }
}
