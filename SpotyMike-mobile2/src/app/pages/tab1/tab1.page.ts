import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController, IonIcon } from '@ionic/angular/standalone';
import { CridComponent } from 'src/app/shared/components/crid/crid.component';
import { LastplayComponent } from 'src/app/shared/components/lastplay/lastplay.component';
import { TopsongsPage } from 'src/app/modale/topsongs/topsongs.page';
import { TopPlaylistsComponent } from 'src/app/shared/components/top-playlists/top-playlists.component';
import { MusicGenrePage } from "../../shared/components/music-genre/music-genre.page";
import { addIcons } from 'ionicons';
import { arrowForwardOutline, personCircleOutline, searchOutline } from 'ionicons/icons';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, CridComponent, LastplayComponent, TopPlaylistsComponent, MusicGenrePage]
})
export class Tab1Page {
  constructor(private modalCtrl: ModalController) {
    addIcons({searchOutline,personCircleOutline,arrowForwardOutline})
  }
  async OpenModaleTopSong() {
    const modal = await this.modalCtrl.create({
      component:TopsongsPage,
    });
    await modal.present()
  }
  search(){
    console.log("run");
  }
}
