import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DenguePage } from './dengue.page';

const routes: Routes = [
  {
    path: '',
    component: DenguePage
  },
  {
    path: 'desc3',
    loadChildren: () => import('./desc3/desc3.module').then( m => m.Desc3PageModule)
  },
  {
    path: 'desc4',
    loadChildren: () => import('./desc4/desc4.module').then( m => m.Desc4PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DenguePageRoutingModule {}
