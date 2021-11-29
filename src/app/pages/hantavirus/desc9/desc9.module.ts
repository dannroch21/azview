import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc9PageRoutingModule } from './desc9-routing.module';

import { Desc9Page } from './desc9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc9PageRoutingModule
  ],
  declarations: [Desc9Page]
})
export class Desc9PageModule {}
