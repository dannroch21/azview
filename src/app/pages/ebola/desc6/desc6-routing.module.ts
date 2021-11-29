import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc6Page } from './desc6.page';

const routes: Routes = [
  {
    path: '',
    component: Desc6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc6PageRoutingModule {}
