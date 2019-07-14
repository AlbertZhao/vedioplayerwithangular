import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Playlist } from './playlist';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class PlaylistService {
  playlistUrl = 'http://localhost:3000/youtube';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PlaylistService');
  }

  /** GET playlist from the server */
  getPlaylist(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(this.playlistUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }


}