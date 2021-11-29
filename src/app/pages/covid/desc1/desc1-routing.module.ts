import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc1Page } from './desc1.page';

const routes: Routes = [
  {
    path: '',
    component: Desc1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc1PageRoutingModule {}
