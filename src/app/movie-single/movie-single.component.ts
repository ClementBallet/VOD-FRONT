import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-single',
  templateUrl: './movie-single.component.html',
  styleUrls: ['./movie-single.component.css']
})
export class MovieSingleComponent implements OnInit {

  private youtubeModal;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  showYoutubeModal() {
     this.youtubeModal = document.querySelector(".modal-box");

     this.youtubeModal.classList.add('show-youtube-modal');
  }
}
