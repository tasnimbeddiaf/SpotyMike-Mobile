import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, where, query, and } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/users';
@Injectable({
  providedIn: 'root'
})
export class ServiceFirebaseService {
  constructor() {}
  private app = initializeApp(environment.firebase);
  private db = getFirestore(this.app);
  async getUsers(email :string ,password :string) {
    const q = query(collection(this.db, 'Users'), where("email", "==", email),where("password","==",password));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map(doc => doc.data());
    return users;
  }
}

