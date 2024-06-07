import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {heartOutline,personOutline,homeOutline,musicalNotesOutline } from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  private albumService = inject(FirestoreService)

  constructor() {
    // this.albumService.getAlbums();
    addIcons({ heartOutline,personOutline,homeOutline,musicalNotesOutline});
  }
}
