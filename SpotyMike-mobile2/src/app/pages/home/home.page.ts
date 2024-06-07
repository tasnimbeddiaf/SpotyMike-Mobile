import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController } from '@ionic/angular/standalone';
import { TopsongsPage } from 'src/app/modale/topsongs/topsongs.page';
import { CridComponent } from 'src/app/shared/components/crid/crid.component';
import { LastplayComponent } from 'src/app/shared/components/lastplay/lastplay.component';
// import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
// import { HomeComponent } from 'src/app/components/home/home.component';

@Component({
  selector: 'app-home-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,

  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CridComponent, LastplayComponent]
})
export class HomePage {
  constructor(private modalCtrl: ModalController) { }
  async OpenModaleTopSong() {
    const modal = await this.modalCtrl.create({
      component:TopsongsPage,
    });
    await modal.present()
  }
}