import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-modal-youtube',
  templateUrl: './modal-youtube.component.html',
  styleUrls: ['./modal-youtube.component.css']
})
export class ModalYoutubeComponent implements OnInit {

  youtubeModal: any;
  videoUrl: any;

  @Input() urlTrailer: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlTrailer);
  }

  hideYoutubeModal() {
    this.youtubeModal = document.querySelector('.modal-box');
    this.youtubeModal.classList.remove('show-youtube-modal');
  }
}
