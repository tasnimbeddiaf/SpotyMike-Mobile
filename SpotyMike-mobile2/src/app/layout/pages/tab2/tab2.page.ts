import { FavoriteService } from 'src/app/core/favorite-service.service';
import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Song } from 'src/app/core/interfaces/song';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {
private favoriteService  =inject(FavoriteService);
public allfavoriteSong :Song []= [];
  constructor() {}
  ngOnInit() {
    this.allfavoriteSong = this.favoriteService.getFavoriteSongs();
    console.log(this.allfavoriteSong);
  }
}
