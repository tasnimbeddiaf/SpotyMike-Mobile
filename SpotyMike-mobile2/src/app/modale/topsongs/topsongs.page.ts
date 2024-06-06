import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonIcon } from '@ionic/angular/standalone';
import {chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-topsongs',
  templateUrl: './topsongs.page.html',
  styleUrls: ['./topsongs.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TopsongsPage implements OnInit {
buttonBack() {
throw new Error('Method not implemented.');
}

  constructor() {
    addIcons({chevronBackOutline})
   }
   public TopSongs =[
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

  ngOnInit() {
  }

}

