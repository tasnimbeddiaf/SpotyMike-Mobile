import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // privateapp = initializeApp (environment.firebase);
  // private db = getFirestore(this.app);

  // async getAlbums() {
  //   const albumsCol = collection(this.db, 'albums');
  //   const albumsSnapshot = await getDocs(albumsCol);
  //   const albumsList = albumsSnapshot.docs.map(doc => doc.data());
  //   return albumsList;
  // }

  constructor() { }
}
