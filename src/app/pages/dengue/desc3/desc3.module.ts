import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc3PageRoutingModule } from './desc3-routing.module';

import { Desc3Page } from './desc3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc3PageRoutingModule
  ],
  declarations: [Desc3Page]
})
export class Desc3PageModule {}
