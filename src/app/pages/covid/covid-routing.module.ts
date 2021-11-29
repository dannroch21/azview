import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidPage } from './covid.page';

const routes: Routes = [
  {
    path: '',
    component: CovidPage
  },
  {
    path: 'desc1',
    loadChildren: () => import('./desc1/desc1.module').then( m => m.Desc1PageModule)
  },
  {
    path: 'desc2',
    loadChildren: () => import('./desc2/desc2.module').then( m => m.Desc2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidPageRoutingModule {}
