import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc5Page } from './desc5.page';

const routes: Routes = [
  {
    path: '',
    component: Desc5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc5PageRoutingModule {}
