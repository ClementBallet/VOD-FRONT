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

  // getAsyncDataMovie(): any {
  //   this.http.get(this.dataUrl)
  //     .subscribe((response: any) => {
  //       this.data = response;
  //       // this.urlTrailer = this.data.urlTrailer;
  //       console.log(this.data);
  //       console.log(this.urlTrailer);
  //     });
  // }

  showYoutubeModal() {
    this.youtubeModal = document.querySelector('.modal-box');

    this.youtubeModal.classList.add('show-youtube-modal');
  }
}
