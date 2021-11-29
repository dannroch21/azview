import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc4PageRoutingModule } from './desc4-routing.module';

import { Desc4Page } from './desc4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc4PageRoutingModule
  ],
  declarations: [Desc4Page]
})
export class Desc4PageModule {}
