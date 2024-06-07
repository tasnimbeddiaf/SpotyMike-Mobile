import { Component, OnInit } from '@angular/core';
import { IonGrid,IonCol,IonRow} from '@ionic/angular/standalone';

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

  public LastplaydedList=[
    {
      name :"Amelia Cantata",
      image: "../assets/icon/img.png",
      song :"lettre",
      duration :"5:00"

    },
    {
      name :"davido",
      image: "../assets/icon/img.png",
      song :"IF",
      duration :"6:00"
    },
    {
      name :"dadju",
      image: "../assets/icon/img.png",
      song : 'Amour',
      duration :"4:30"
    },
  ]


  ngOnInit() {}

}
