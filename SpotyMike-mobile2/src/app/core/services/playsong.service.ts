import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlaysongService {

  private audio: HTMLAudioElement;
  private isPlay$: BehaviorSubject<boolean>;
  constructor() {
    this.audio = new Audio();
    this.isPlay$ = new BehaviorSubject<boolean>(false);
  }
  load(id: string) {
    this.audio = new Audio(`http://spotymike.eu-4.evennode.com/stream/${id}`);
    this.audio.load();
  }
  play() {
    this.audio.play();
    this.isPlay$.next(true);
  }
  pause() {
    this.audio.pause();
  }
  stop() {
    this.pause();
    this.audio.currentTime = 0; // Time playing song zero
    this.isPlay$.next(false);
  }

}
