import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layout/auth/auth.page').then( m => m.AuthPage),
    children:[
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'  // Add pathMatch property
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./shared/tabs/tabs.page').then(m => m.TabsPage),
  },





];
