import { Component, OnInit, inject } from '@angular/core';
import { IonGrid,IonCol,IonRow} from '@ionic/angular/standalone';
import { Song } from 'src/app/core/interfaces/song';
import { LastplayService } from 'src/app/core/services/lastplay.service';

@Component({
  selector: 'app-lastplay',
  templateUrl: './lastplay.component.html',
  styleUrls: ['./lastplay.component.scss'],
  standalone:true,
  imports:[
    IonGrid,
    IonCol,
    IonRow

    ]
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
