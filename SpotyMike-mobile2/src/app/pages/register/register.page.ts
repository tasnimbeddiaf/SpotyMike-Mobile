import { Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonIcon} from '@ionic/angular/standalone';
import {cellularOutline,chevronBackOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ReactiveFormsModule,]
})
export class RegisterPage implements OnInit {

  private router = inject(Router);
buttonBack() {
 this.router.navigate(['auth/login']);
}
bioSection: FormGroup = new FormGroup({
  email: new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[A-Z])(?=.*[\W_]).*$/),
    Validators.minLength(8),
  ]),
});;

  constructor() {
    addIcons({cellularOutline,chevronBackOutline});
   }

  ngOnInit() {}
}
