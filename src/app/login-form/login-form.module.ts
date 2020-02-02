import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{LoginFormComponent} from './login-form.component';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginFormComponent
      }
    ])
  ],
  declarations: [LoginFormComponent]
})
export class LoginFormModule { }
