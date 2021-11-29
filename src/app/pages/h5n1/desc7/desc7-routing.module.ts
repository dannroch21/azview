import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc7Page } from './desc7.page';

const routes: Routes = [
  {
    path: '',
    component: Desc7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc7PageRoutingModule {}
