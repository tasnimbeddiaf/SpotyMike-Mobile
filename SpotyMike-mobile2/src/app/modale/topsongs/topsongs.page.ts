import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonIcon, ModalController, IonList, IonListHeader, IonItem, IonLabel,IonThumbnail } from '@ionic/angular/standalone';
import {chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Song } from 'src/app/core/interfaces/song';
import { PlaySongsPage } from '../play-songs/play-songs.page';

@Component({
  selector: 'app-topsongs',
  templateUrl: './topsongs.page.html',
  styleUrls: ['./topsongs.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonListHeader, IonList, IonIcon, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonThumbnail]
})
export class TopsongsPage implements OnInit {
modal: any;
private firebaseService= inject(ServiceFirebaseService);
  constructor(private modalCtrl: ModalController) {
    addIcons({chevronBackOutline})
   }
   public TopSongs :Song[] = [];

  async ngOnInit() {
    const reponse = await this.firebaseService.getAllSong();
    const songsWithArtists = await Promise.all(reponse.map(async (data: any) => {
      const artiste = await this.firebaseService.getartist(data.artist_id);
      return {
        album_id: data.album_id,
        title: data.title,
        image: data.image,
        top_song_acount: data.top_song_acount,
        urlsong: data.urlsong,
        duration :data.duration,
        artist: artiste,
      } as Song;
    }));
    this.TopSongs = songsWithArtists;
    console.log(this.TopSongs);
  }
  async playSong(audioUrl: string){
    const song = this.TopSongs.find(item => item.urlsong === audioUrl);
    const modal = await this.modalCtrl.create({
      component:PlaySongsPage,
      componentProps: { song }
    });
     modal.present();
  }

}

