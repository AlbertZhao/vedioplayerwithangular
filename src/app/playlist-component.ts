import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaylistService } from './app.playlist.service';
import { Playlist } from './playlist';


@Component({
  selector: 'app-playlist',
  templateUrl: './html/app.videoplayer-playlist.html'
})
export class VideoPlayListComponent implements OnInit{

  @Output() playListEvent = new EventEmitter<Playlist>();

  constructor(private playlistService: PlaylistService) {}
  playlists: Playlist[];
  ngOnInit() {
    this.getPlayList();
  }



  getPlayList(): void {
    this.playlistService.getPlaylist()
      .subscribe(playlists => (this.playlists = playlists));
  }

  triggerPlay(playlistItem: Playlist) {
    this.playListEvent.emit(playlistItem);
  }

}
