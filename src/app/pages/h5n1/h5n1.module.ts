import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { H5n1PageRoutingModule } from './h5n1-routing.module';

import { H5n1Page } from './h5n1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    H5n1PageRoutingModule
  ],
  declarations: [H5n1Page]
})
export class H5n1PageModule {}
