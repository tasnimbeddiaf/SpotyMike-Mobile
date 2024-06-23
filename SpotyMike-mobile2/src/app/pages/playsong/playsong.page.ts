import { Song } from './../../core/interfaces/song';
import { Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, NavParams, ModalController,IonModal, IonButton, IonRange } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaysongService } from 'src/app/core/services/playsong.service';
import { addIcons } from 'ionicons';
import { FavoriteService } from 'src/app/core/services/favorite-service.service';
import { shareSocialOutline, heartOutline, heart, playSkipBackOutline, playSkipForwardOutline, playOutline, repeatOutline, shuffleOutline, chevronBackOutline, pauseOutline } from 'ionicons/icons';
import { LastplayService } from 'src/app/core/services/lastplay.service';
@Component({
  selector: 'app-playsong',
  templateUrl: './playsong.page.html',
  styleUrls: ['./playsong.page.scss'],
  standalone: true,
  imports: [IonRange, IonButton, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonModal]
})
export class PlaysongPage implements OnInit {
  private favoriteService = inject(FavoriteService);
  private lastplayService = inject(LastplayService);
  song :any;
  private idSong: string = '';
  public name: string = '';
  private playsongService = inject(PlaysongService);
  isFavorite: boolean = false;
  play: boolean = false;
  private router = inject(Router);
  duration: number =0;
  currentTime: any;
  image:any;
  constructor(private modalCtrl: ModalController) {
    addIcons({ shareSocialOutline, heartOutline, heart, playSkipBackOutline, playSkipForwardOutline, playOutline, repeatOutline, shuffleOutline, chevronBackOutline, pauseOutline });
  }

  ngOnInit() {
    this.idSong = this.song.song_id;
    this.name = this.song.artist.fullname;
    this.image = this.song.image;
    this.lastplayService.mylastplaylisteadd(this.song);
    this.playsongService.stop();
    this.playsongService.load(this.idSong);
    this.play = true;
    this.playsongService.play();
    if(this.favoriteService.isFavorite(this.song)){
      this.isFavorite=true;
    }
  }
  playMusics() {
    if (this.play) {
      this.playsongService.pause();
    } else {
      this.playsongService.play();
    }
    this.play = !this.play;

  }
  Sharednetworks() {
    throw new Error('Method not implemented.');
  }
  toggleFavorite() {
    if(this.isFavorite){
      this.favoriteService.removeFavorite(this.song);
      console.log(this.favoriteService.getFavoriteSongs());
    }else{
      this.favoriteService.addFavorite(this.song);
    }
    this.isFavorite = !this.isFavorite;
  }
  back() {
    this.router.navigate(['home/home'])
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
