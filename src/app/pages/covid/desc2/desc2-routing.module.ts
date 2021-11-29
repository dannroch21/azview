import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc2Page } from './desc2.page';

const routes: Routes = [
  {
    path: '',
    component: Desc2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc2PageRoutingModule {}
