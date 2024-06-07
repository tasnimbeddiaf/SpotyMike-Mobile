import { Routes } from '@angular/router';
import { tab_routes } from './shared/tabs/tabs.routes';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./layout/auth/auth.page').then(m => m.AuthPage),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./layout/pages/login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'register',
        loadComponent: () => import('./layout/pages/register/register.page').then(m => m.RegisterPage)
      },
    ]
  },
  // {
  //   path: 'home',
  //   //canActivate:[authGuard],
  //   loadComponent: () =>
  //     import('./shared/tabs/tabs.page').then((m) => m.TabsPage),
  //   children:[
  //     {
  //       path: 'homepage',
  //       loadComponent: () => import('./layout/pages/home/home.page').then( m => m.HomePage),
  //     },
  //   ]
  // },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'  // Add pathMatch property
  },
  ...tab_routes,
  {
    path: 'single-playlist',
    loadComponent: () => import('./layout/pages/single-playlist/single-playlist.page').then( m => m.SinglePlaylistPage)
  }

]
