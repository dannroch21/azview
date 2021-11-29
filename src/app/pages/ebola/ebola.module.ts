import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EbolaPageRoutingModule } from './ebola-routing.module';

import { EbolaPage } from './ebola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EbolaPageRoutingModule
  ],
  declarations: [EbolaPage]
})
export class EbolaPageModule {}
