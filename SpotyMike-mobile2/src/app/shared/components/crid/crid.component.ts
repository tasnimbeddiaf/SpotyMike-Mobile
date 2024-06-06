import { Component, OnInit, inject } from '@angular/core';
import { IonGrid,IonCol,IonRow, ModalController} from '@ionic/angular/standalone';
import { PlaySongsPage } from 'src/app/modale/play-songs/play-songs.page';
import { ServiceFirebaseService } from 'src/app/core/services/firebase-service.service';
import { Song } from 'src/app/core/interfaces/song';
@Component({
  selector: 'app-crid',
  templateUrl: './crid.component.html',
  styleUrls: ['./crid.component.scss'],
  standalone:true,
  imports:[
  IonGrid,
  IonCol,
  IonRow

  ]
})
export class CridComponent  implements OnInit {
  private firebaseService= inject(ServiceFirebaseService);
public AllListeSong :Song[] =[]

  constructor(private modalCtrl: ModalController) { }

  async ngOnInit() {
    const reponse = await this.firebaseService.getSongs();
    const songsWithArtists = await Promise.all(reponse.map(async (data: any) => {
      const artiste = await this.firebaseService.getartist(data.artist_id);
      return {
        album_id: data.album_id,
        title: data.title,
        image: data.image,
        top_song_acount: data.top_song_acount,
        urlsong: data.urlsong,
        artist: artiste,
      } as Song;
    }));
    this.AllListeSong = songsWithArtists;
    console.log(this.AllListeSong);

  }

  async playSong(audioUrl: string){
    const song = this.AllListeSong.find(item => item.urlsong === audioUrl);
    const modal = await this.modalCtrl.create({
      component:PlaySongsPage,
      componentProps: { song }
    });
     modal.present();
  }
/*
    this.audio.src = audioUrl;
    this.audio.load();
     this.audio.play();
     //this.audio.pause();
     this.audio.addEventListener('loadedmetadata', () => {
      this.songDuration = this.audio.duration;
      this.logAudioProperties();
    });  //console.log(this.audio.duration.valueOf);
  }
  logAudioProperties() {
      console.log('Duration:', this.audio.duration);
      console.log('Current Time:', this.audio.currentTime);
      console.log('Volume:', this.audio.volume);
      console.log('Paused:', this.audio.paused);
      console.log('Playback Rate:', this.audio.playbackRate);
      console.log('Buffered:', this.audio.buffered);
      console.log('Seekable:', this.audio.seekable);
      console.log('Ended:', this.audio.ended);
      console.log('Loop:', this.audio.loop);
      console.log('Muted:', this.audio.muted);
      console.log('Network State:', this.audio.networkState);
      console.log('Ready State:', this.audio.readyState);
      console.log('Current Source:', this.audio.currentSrc);
      console.log('Preload:', this.audio.preload);
      console.log('Autoplay:', this.audio.autoplay);
  }*/

}


