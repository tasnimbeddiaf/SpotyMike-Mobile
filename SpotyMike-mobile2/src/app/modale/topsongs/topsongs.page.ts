import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonIcon, ModalController, IonList, IonListHeader,IonThumbnail, IonAvatar,IonItem } from '@ionic/angular/standalone';
import {chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ServiceFirebaseService } from 'src/app/core/services/services-firebase.service';
import { Song } from 'src/app/core/interfaces/song';
import { ListgridPage } from "../../shared/components/listgrid/listgrid.page";
import { Router } from '@angular/router';

@Component({
    selector: 'app-topsongs',
    templateUrl: './topsongs.page.html',
    styleUrls: ['./topsongs.page.scss'],
    standalone: true,
    imports: [IonAvatar, IonItem, IonListHeader, IonList, IonIcon, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonThumbnail, ListgridPage]
})
export class TopsongsPage implements OnInit {
modal: any;
private firebaseService= inject(ServiceFirebaseService);
private router = inject(Router);
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
        song_id:data.song_id,
        top_song_acount: data.top_song_acount,
        artist: artiste,
      } as Song;
    }));
    this.TopSongs = songsWithArtists;
  }
  playSong(idSong :string,fullname :string) {
    this.router.navigate([`playsong/${idSong}/${fullname}`]);
  }

}

