import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetodoPageRoutingModule } from './createtodo-routing.module';

import { CreatetodoPage } from './createtodo.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatetodoPageRoutingModule
  ],
  declarations: [CreatetodoPage]
})
export class CreatetodoPageModule {}
