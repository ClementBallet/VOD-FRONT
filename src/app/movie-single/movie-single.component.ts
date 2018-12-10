import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {

  private youtubeModal;
  public dataUrl: string = 'http://localhost:8006/api/movies/1';
  public data;
  public urlTrailer;

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(this.dataUrl)
      .subscribe((response: any) => {
        this.data = response;
        console.log(this.data);
        this.urlTrailer = this.data.urlTrailer;
      });
  }

  showYoutubeModal() {
    this.youtubeModal = document.querySelector(".modal-box");

    this.youtubeModal.classList.add('show-youtube-modal');
  }
}
