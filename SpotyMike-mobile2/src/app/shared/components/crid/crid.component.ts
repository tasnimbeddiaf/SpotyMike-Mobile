import { Component, OnInit } from '@angular/core';
import { IonGrid,IonCol,IonRow} from '@ionic/angular/standalone';

@Component({
  selector: 'app-crid',
  templateUrl: './crid.component.html',
  styleUrls: ['./crid.component.scss'],
  standalone:true,
  imports:[
  IonGrid,
  IonCol,
  IonRow

  ]
})
export class CridComponent  implements OnInit {
public AllListeSong =  [
  {
    name :"Amelia Cantata",
    image: "../assets/icon/img.png",
    song :"lettre"

  },
  {
    name :"davido",
    image: "../assets/icon/img.png",
    song :"IF"
  },
  {
    name :"dadju",
    image: "../assets/icon/img.png",
    song : 'Amour'
  },
];

  constructor() { }

  ngOnInit() {}

}
