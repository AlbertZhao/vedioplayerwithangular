import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { VideoParentComponent } from './parent-component';
import { VideoPlayListComponent } from './playlist-component';
import { VideoPlayComponent } from './play-component';
import { VideoControlsComponent } from './controls-component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { PlaylistService } from './app.playlist.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    VideoParentComponent,
    VideoPlayComponent,
    VideoControlsComponent,
    VideoPlayListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    HttpClientModule
  ],
  providers: [
    HttpErrorHandler,
    PlaylistService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
