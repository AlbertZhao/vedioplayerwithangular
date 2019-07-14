import { Component, ElementRef, ViewChild, Input, EventEmitter } from '@angular/core';
import { Playlist } from './playlist';

@Component({
  selector: 'app-parent',
  templateUrl: './html/app.videoplayer-parent.html'
})
export class VideoParentComponent {
  title = 'vedioplayerwithangular';

  playFlag: any;

  playItem: Playlist;

  receiveFalgFromChild(flag) {
    this.playFlag = flag;
    console.log('parent received: ', flag);
  }
  receivePlayItemFromChild(playItem) {
    this.playItem = playItem;
    console.log('playItem received: ', playItem);
  }
}
