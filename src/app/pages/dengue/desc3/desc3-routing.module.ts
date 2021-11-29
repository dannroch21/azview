import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Desc3Page } from './desc3.page';

const routes: Routes = [
  {
    path: '',
    component: Desc3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Desc3PageRoutingModule {}
