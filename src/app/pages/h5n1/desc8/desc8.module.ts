import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Desc8PageRoutingModule } from './desc8-routing.module';

import { Desc8Page } from './desc8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Desc8PageRoutingModule
  ],
  declarations: [Desc8Page]
})
export class Desc8PageModule {}
