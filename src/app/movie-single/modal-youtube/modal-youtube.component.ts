import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {log} from "util";

@Component({
  selector: 'app-modal-youtube',
  templateUrl: './modal-youtube.component.html',
  styleUrls: ['./modal-youtube.component.css']
})
export class ModalYoutubeComponent implements OnInit {

  private youtubeModal;
  @Input() dataToChildComponent;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('dataToChildComponent : ', this.dataToChildComponent);
  }

  hideYoutubeModal() {
    this.youtubeModal = document.querySelector(".modal-box");

    this.youtubeModal.classList.remove('show-youtube-modal');
  }
}
