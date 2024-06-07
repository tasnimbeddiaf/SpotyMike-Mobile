import { Component } from '@angular/core';
<<<<<<< HEAD:SpotyMike-mobile2/src/app/pages/tab1/tab1.page.ts
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController } from '@ionic/angular/standalone';
import { CridComponent } from 'src/app/shared/components/crid/crid.component';
import { LastplayComponent } from 'src/app/shared/components/lastplay/lastplay.component';
import { TopsongsPage } from 'src/app/src/module/topsongs/topsongs.page';
=======
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HomeComponent } from 'src/app/components/home/home.component';
>>>>>>> main:SpotyMike-mobile2/src/app/layout/pages/home/home.page.ts

@Component({
  selector: 'app-home-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
<<<<<<< HEAD:SpotyMike-mobile2/src/app/pages/tab1/tab1.page.ts
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CridComponent, LastplayComponent]
})
export class Tab1Page {
  constructor(private modalCtrl: ModalController) { }
  async OpenModaleTopSong() {
    const modal = await this.modalCtrl.create({
      component:TopsongsPage,
    });
    await modal.present()
  }
=======
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, HomeComponent],
})

export class HomePage {
  constructor() {}
>>>>>>> main:SpotyMike-mobile2/src/app/layout/pages/home/home.page.ts
}
