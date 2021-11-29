import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HantavirusPageRoutingModule } from './hantavirus-routing.module';

import { HantavirusPage } from './hantavirus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HantavirusPageRoutingModule
  ],
  declarations: [HantavirusPage]
})
export class HantavirusPageModule {}
