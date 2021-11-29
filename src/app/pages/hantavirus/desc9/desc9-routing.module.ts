import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc9Page } from './desc9.page';

const routes: Routes = [
  {
    path: '',
    component: Desc9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc9PageRoutingModule {}
