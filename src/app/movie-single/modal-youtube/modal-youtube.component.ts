import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-youtube',
  templateUrl: './modal-youtube.component.html',
  styleUrls: ['./modal-youtube.component.css']
})
export class ModalYoutubeComponent implements OnInit {

  private youtubeModal;

  @Input() urlTrailer;

  constructor() { }

  ngOnInit() {
  }

  hideYoutubeModal() {
    this.youtubeModal = document.querySelector('.modal-box');

    this.youtubeModal.classList.remove('show-youtube-modal');
  }
}
