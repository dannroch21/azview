import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HantavirusPage } from './hantavirus.page';

const routes: Routes = [
  {
    path: '',
    component: HantavirusPage
  },
  {
    path: 'desc9',
    loadChildren: () => import('./desc9/desc9.module').then( m => m.Desc9PageModule)
  },
  {
    path: 'desc10',
    loadChildren: () => import('./desc10/desc10.module').then( m => m.Desc10PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HantavirusPageRoutingModule {}
