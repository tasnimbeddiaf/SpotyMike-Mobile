import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-single-playlist',
  templateUrl: './single-playlist.page.html',
  styleUrls: ['./single-playlist.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SinglePlaylistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
