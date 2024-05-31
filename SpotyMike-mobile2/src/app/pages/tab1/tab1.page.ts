import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CridComponent } from 'src/app/shared/components/crid/crid.component';
import { LastplayComponent } from 'src/app/shared/components/lastplay/lastplay.component';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, CridComponent, LastplayComponent]
})
export class Tab1Page {
OpenModaleTopSong() {
console.log("ok");
}
  constructor() {}
}
