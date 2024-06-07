import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-home-like',
  templateUrl: 'like.page.html',
  styleUrls: ['like.page.scss'],
  standalone: true,
  imports: [IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class LikePage {

  constructor() {}

}
