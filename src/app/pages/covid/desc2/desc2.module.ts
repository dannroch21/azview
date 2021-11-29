import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc2PageRoutingModule } from './desc2-routing.module';

import { Desc2Page } from './desc2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc2PageRoutingModule
  ],
  declarations: [Desc2Page]
})
export class Desc2PageModule {}
