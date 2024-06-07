import { Injectable } from '@angular/core';
import { Song } from 'src/app/core/interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteSongs: Song[] = [];

  addFavorite(song: Song) {
    this.favoriteSongs.push(song);
  }

  removeFavorite(song: Song) {
    this.favoriteSongs = this.favoriteSongs.filter(s => s !== song);
  }
  isFavorite(song: Song): boolean {
    return this.favoriteSongs.some(s => s === song);
  }
  getFavoriteSongs(): Song[] {
    return this.favoriteSongs;
  }
}
