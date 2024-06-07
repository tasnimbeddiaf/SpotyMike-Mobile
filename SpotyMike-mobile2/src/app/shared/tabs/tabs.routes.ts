import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tab_routes: Routes = [
  {
    path: 'home',
    component: TabsPage,
    children: [
      // {
      //   path: 'home',
      //   loadComponent: () =>
      //     import('../../layout/pages/home/home.page').then((m) => m.HomePage),
      // },
      {
        path: 'like',
        loadComponent: () =>
          import('../../layout/pages/tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'playlist',
        loadComponent: () =>
          import('../../layout/pages/tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../layout/pages/tab4/tab4.page').then((m) => m.Tab4Page),
      },
      // {
      //   path: '',
      //   redirectTo: '/home/home',
      //   pathMatch: 'full',
      // },
    ],
  },
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full',
  },
];
