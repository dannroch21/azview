import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc10PageRoutingModule } from './desc10-routing.module';

import { Desc10Page } from './desc10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc10PageRoutingModule
  ],
  declarations: [Desc10Page]
})
export class Desc10PageModule {}
