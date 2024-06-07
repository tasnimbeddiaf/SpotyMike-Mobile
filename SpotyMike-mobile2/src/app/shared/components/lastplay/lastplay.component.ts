import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonLabel, IonItem, IonList,IonThumbnail } from '@ionic/angular/standalone';
import { Song } from 'src/app/core/interfaces/song';
import { LastplayService } from 'src/app/core/services/lastplay.service';

@Component({
  selector: 'app-lastplay',
  templateUrl: './lastplay.component.html',
  styleUrls: ['./lastplay.component.scss'],
  standalone:true,
  imports:[IonItem,IonThumbnail,IonLabel]
})
export class LastplayComponent  implements OnInit {

  constructor() { }
private lastplayAll = inject(LastplayService);
  public LastplaydedList :Song[] = [];


  ngOnInit() {
    this.LastplaydedList = this.lastplayAll.getmylastplayListe();
    console.log(this.LastplaydedList);
  }
}
