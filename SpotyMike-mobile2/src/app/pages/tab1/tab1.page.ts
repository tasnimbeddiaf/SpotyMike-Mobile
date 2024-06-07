import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController } from '@ionic/angular/standalone';
import { CridComponent } from 'src/app/shared/components/crid/crid.component';
import { LastplayComponent } from 'src/app/shared/components/lastplay/lastplay.component';
import { TopsongsPage } from 'src/app/modale/topsongs/topsongs.page';
import { TopPlaylistsComponent } from 'src/app/shared/components/top-playlists/top-playlists.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CridComponent, LastplayComponent, TopPlaylistsComponent
  ]
})
export class Tab1Page {
  //public favoriteSongs: Song[] = [];
  constructor(private modalCtrl: ModalController) { }
  async OpenModaleTopSong() {
    const modal = await this.modalCtrl.create({
      component:TopsongsPage,
    });
    await modal.present()
  }
}
