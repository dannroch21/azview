import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc7PageRoutingModule } from './desc7-routing.module';

import { Desc7Page } from './desc7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc7PageRoutingModule
  ],
  declarations: [Desc7Page]
})
export class Desc7PageModule {}
