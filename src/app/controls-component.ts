import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { ElementRef} from '@angular/core';


@Component({
  selector: 'app-controls',
  templateUrl: './html/app.videoplayer-controls.html'
})

export class VideoControlsComponent {
    @ViewChild('span_up', { static: true }) span_up: ElementRef;
    @ViewChild('span_down', { static: true }) span_down: ElementRef;
    @Output() startEvent = new EventEmitter<any>();

    muted = false;

    start() {
        this.startEvent.emit('play');
    }

    pause() {
        this.startEvent.emit('pause');
    }
    volumeUp() {
        this.startEvent.emit('volumeUp' + Math.random());
    }

    volumeDown() {
        this.startEvent.emit('volumeDown' + Math.random());
    }

    enableMute() {
        if (this.muted) {
            this.muted = false;
            this.startEvent.emit('enableMute_false');
        } else {
            this.muted = true;
            this.startEvent.emit('enableMute_true');
        }
    }

    stop() {
        this.startEvent.emit('stop' + Math.random());
    }

    up() {
        this.startEvent.emit('up' + Math.random());
        const upCounts = localStorage.getItem('upCounts') != null ? localStorage.getItem('upCounts') : 0;
        this.span_up.nativeElement.innerHTML = upCounts;
    }

    down() {
        this.startEvent.emit('down' + Math.random());
        const downCounts = localStorage.getItem('downCounts') != null ? localStorage.getItem('downCounts') : 0;
        this.span_down.nativeElement.innerHTML = downCounts;
    }

}
