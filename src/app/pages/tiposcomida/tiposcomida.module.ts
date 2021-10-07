import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiposcomidaPageRoutingModule } from './tiposcomida-routing.module';

import { TiposcomidaPage } from './tiposcomida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiposcomidaPageRoutingModule
  ],
  declarations: [TiposcomidaPage]
})
export class TiposcomidaPageModule {}
