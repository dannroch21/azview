import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc8Page } from './desc8.page';

const routes: Routes = [
  {
    path: '',
    component: Desc8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc8PageRoutingModule {}
