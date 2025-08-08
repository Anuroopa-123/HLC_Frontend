import { Component, ElementRef, ViewChild } from '@angular/core';
import { Doyens } from "../doyens/doyens";
import { Committeemembers } from "../committeemembers/committeemembers";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [Doyens, Committeemembers,CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  isVideoModalOpen = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  openVideoModal() {
    this.isVideoModalOpen = true;
  }

  closeVideoModal() {
    this.isVideoModalOpen = false;
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.pause();
      this.videoPlayer.nativeElement.currentTime = 0;
    }
  }
}
