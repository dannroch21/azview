import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc1PageRoutingModule } from './desc1-routing.module';

import { Desc1Page } from './desc1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc1PageRoutingModule
  ],
  declarations: [Desc1Page]
})
export class Desc1PageModule {}
