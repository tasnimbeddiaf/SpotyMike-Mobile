import { Routes } from '@angular/router';

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
  {
    path: 'home',
    loadComponent: () =>
      import('./shared/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./pages/tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./pages/tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./pages/tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () =>
          import('./pages/tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'tab4',
    loadComponent: () => import('./pages/tab4/tab4.page').then( m => m.Tab4Page)
  },


]
