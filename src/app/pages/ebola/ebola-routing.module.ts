import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbolaPage } from './ebola.page';

const routes: Routes = [
  {
    path: '',
    component: EbolaPage
  },
  {
    path: 'desc5',
    loadChildren: () => import('./desc5/desc5.module').then( m => m.Desc5PageModule)
  },
  {
    path: 'desc6',
    loadChildren: () => import('./desc6/desc6.module').then( m => m.Desc6PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbolaPageRoutingModule {}
