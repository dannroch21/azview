import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc10Page } from './desc10.page';

const routes: Routes = [
  {
    path: '',
    component: Desc10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc10PageRoutingModule {}
