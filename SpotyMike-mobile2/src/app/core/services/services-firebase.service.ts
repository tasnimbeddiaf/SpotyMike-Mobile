import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query, and, orderBy, limit } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ServiceFirebaseService {
  constructor() { }

  private app = initializeApp(environment.firebase);
  private db = getFirestore(this.app);

  async getUsers(email: string, password: string) {
    const q = query(collection(this.db, 'users'), where("email", "==", email), where("password", "==", password));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map(doc => doc.data());
    return users;
  }
  async getExistUser(email :string){
    const q = query(collection(this.db, 'users'), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map(doc => doc.data());
    return users;
  }
  private songs = collection(this.db, 'songs');
  async getSongs() {
    const q = query(this.songs, orderBy("top_song_acount", "desc"), limit(3));
    const querySnapshot = await getDocs(q);
    const songs = querySnapshot.docs.map(doc => doc.data());
    return songs;
  }
  async getAllSong() {
    const q = query(this.songs, orderBy("top_song_acount", "desc"));
    const querySnapshot = await getDocs(q);
    const songs = querySnapshot.docs.map(doc => doc.data());
    return songs;
  }

  private artists = collection(this.db, 'artistes');
  async getartist(id_artist: string) {
    const q = query((this.artists), where("artist_id", '==', id_artist));
    const querySnapshot = await getDocs(q);
    const artistDocs = querySnapshot.docs.map(doc => doc.data());
    return artistDocs[0];
  }
}

