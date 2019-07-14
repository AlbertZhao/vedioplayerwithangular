import { Component, Input, ViewChild, ElementRef, OnInit, EventEmitter } from '@angular/core';
import { Playlist } from './playlist';


@Component({
  selector: 'app-play',
  // template: ``,
  templateUrl: './html/app.videoplayer-play.html'
})
export class VideoPlayComponent {
  @ViewChild('videoplayer', { static: true }) video: ElementRef;
   upCounts = localStorage.getItem('upCounts') != null ? localStorage.getItem('upCounts') : 0;

   downCounts = localStorage.getItem('downCounts') != null ? localStorage.getItem('downCounts') : 0;

    @Input()
    set playFlag(playFlag: any) {
      if (playFlag != null) {
        if (playFlag === 'play') {
          this.video.nativeElement.play();
        } else if (playFlag === 'pause') {
          this.video.nativeElement.pause();
        } else if (playFlag.indexOf('volumeUp') !== -1) {
          if (this.video.nativeElement.volume < 1.0) {
            this.video.nativeElement.volume = this.video.nativeElement.volume + 0.1;
          }
        } else if (playFlag.indexOf('volumeDown') !== -1) {
          if (this.video.nativeElement.volume > 0.1) {
            this.video.nativeElement.volume = this.video.nativeElement.volume - 0.1;
          }
        } else if (playFlag === 'enableMute_false') {
          this.video.nativeElement.muted = false;
        } else if (playFlag === 'enableMute_true') {
          this.video.nativeElement.muted = true;
        } else if (playFlag.indexOf('stop') !== -1) {
          this.stop();
        } else if (playFlag.indexOf('up') !== -1) {
          this.upCounts = Number(this.upCounts) + 1;
          localStorage.setItem('upCounts', String(this.upCounts));
        } else if (playFlag.indexOf('down') !== -1) {
          this.downCounts = Number(this.downCounts) + 1;
          localStorage.setItem('downCounts', String(this.downCounts));
        }
      }
      console.log('play flag receved is:', playFlag);
    }

    @Input()
    set playItem(playItem: Playlist) {
      if (playItem != null) {
        this.video.nativeElement.src = playItem.url;
        this.stop();
        this.video.nativeElement.play();
        console.log('playInfo:', this.video.nativeElement.src);
        console.log('playInfo:', playItem);
      }
    }

    stop() {
      this.video.nativeElement.pause();
      this.video.nativeElement.currentTime = 0;
    }
}
