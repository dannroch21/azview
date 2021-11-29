import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { H5n1Page } from './h5n1.page';

const routes: Routes = [
  {
    path: '',
    component: H5n1Page
  },
  {
    path: 'desc7',
    loadChildren: () => import('./desc7/desc7.module').then( m => m.Desc7PageModule)
  },
  {
    path: 'desc8',
    loadChildren: () => import('./desc8/desc8.module').then( m => m.Desc8PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class H5n1PageRoutingModule {}
