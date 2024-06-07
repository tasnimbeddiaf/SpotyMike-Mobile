import { Routes } from '@angular/router';
import { tab_routes } from './shared/tabs/tabs.routes';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layout/auth/auth.page').then(m => m.AuthPage),
    children: [
      {
        path: 'login', 
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'  // Add pathMatch property
  },
  ...tab_routes,
  {
    path: 'play-songs',
    loadComponent: () => import('./modale/play-songs/play-songs.page').then( m => m.PlaySongsPage)
  },
  {
    path: 'playlists',
    loadComponent: () => import('./pages/tab3/tab3.page').then( m => m.Tab3Page)
  },


]