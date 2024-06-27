import { Artist, Song } from './../../core/interfaces/song';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, ModalController, NavParams, IonRange } from '@ionic/angular/standalone';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { addIcons } from 'ionicons';
import { chevronBack, chevronBackOutline, heart, heartOutline, pauseOutline, playOutline, playSkipBackOutline, playSkipForwardOutline, repeatOutline, shareSocialOutline, shuffleOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { LastplayService } from 'src/app/core/services/lastplay.service';

@Component({
  selector: 'app-play-songs',
  templateUrl: './play-songs.page.html',
  styleUrls: ['./play-songs.page.scss'],
  standalone: true,
  imports: [IonRange, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlaySongsPage implements OnInit {
  private route = inject(Router);

  private favoriteService = inject(FavoriteService);
  private lastplayService = inject(LastplayService);
  song: any;
  private audio = new Audio();
  isFavorite: boolean = false;
  play: boolean = false;
  name: string = '';
  currentTime: number = 0;
  formattedCurrentTime: string = '00:00';
  formattedDurationTime: string = '00:00';
  duration: number = 0;
  modal: any;

  constructor() {
    addIcons({ shareSocialOutline, heartOutline, heart, playSkipBackOutline, playSkipForwardOutline, playOutline, repeatOutline, shuffleOutline, chevronBackOutline, pauseOutline });
  }

  ngOnInit() {
    if (this.song) {
      this.name = this.song.artist.fullname;
      this.playSong(this.song.urlsong);
      this.isFavorite = this.favoriteService.isFavorite(this.song);
    }

    this.audio.addEventListener('timeupdate', () => {
      this.currentTime = this.audio.currentTime;
      this.formattedCurrentTime = this.formatTime(this.currentTime);
    });

    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
      this.formattedDurationTime = this.formatTime(this.duration);
    });
  }
  formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const secs: number = Math.floor(seconds % 60);
    return `${this.pad(minutes)}:${this.pad(secs)}`;
  }
  pad(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  seekTo(event: any) {
    this.audio.currentTime = event.detail.value;
  }

  playSong(audioUrl: string) {
    this.audio.src = audioUrl;
    this.audio.load();
    this.audio.pause();
  }

  playMusics() {
    if (this.play) {
      this.audio.pause();
    } else {
      this.audio.play();
      this.lastplayService.mylastplaylisteadd(this.song);
    }
    this.play = !this.play;
  }

  toggleFavorite() {
    if (this.isFavorite) {
      this.favoriteService.removeFavorite(this.song);
    }else {
      this.favoriteService.addFavorite(this.song);
    }
    this.isFavorite = !this.isFavorite;
  }

  Sharednetworks() {
    console.log("partager");
  }
}
