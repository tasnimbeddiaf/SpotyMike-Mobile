import { Injectable } from '@angular/core';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class LastplayService {

  private lastplaySongs: Song[] = [];

  constructor() { }

  mylastplaylisteadd(song: Song) {
    this.lastplaySongs.push(song);
  }
  getmylastplayListe() {
    return this.lastplaySongs;
  }
}
