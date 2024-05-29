import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule,} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonInput, IonItem, IonLabel, IonButton, IonText, IonIcon, ModalController } from '@ionic/angular/standalone';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import {PasswordForgetPage } from'../../modale/password-forget/password-forget.page'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonButton, IonLabel, IonItem, IonInput, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {
  showPassword: boolean = false;
  password: string = '';
  submitForm = false;
  private router =inject(Router);

  constructor(private modalCtrl: ModalController) {
    addIcons({eyeOffOutline,eyeOutline});
  }
  bioSection: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  onSubmit(){
    console.log("Merci");
  }
  async openModalpasswordForgot(){
    const modal = await this.modalCtrl.create({
      component:PasswordForgetPage,
    });
    modal.present();
  }
  createAcount(){

  }
  ngOnInit() {
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;  // Toggle the boolean value
  }
}
