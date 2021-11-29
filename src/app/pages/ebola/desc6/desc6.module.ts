import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc6PageRoutingModule } from './desc6-routing.module';

import { Desc6Page } from './desc6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc6PageRoutingModule
  ],
  declarations: [Desc6Page]
})
export class Desc6PageModule {}
