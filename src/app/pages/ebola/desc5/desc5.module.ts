import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc5PageRoutingModule } from './desc5-routing.module';

import { Desc5Page } from './desc5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc5PageRoutingModule
  ],
  declarations: [Desc5Page]
})
export class Desc5PageModule {}
