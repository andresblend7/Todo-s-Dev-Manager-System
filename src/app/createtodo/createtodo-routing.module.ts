import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatetodoPage } from './createtodo.page';

const routes: Routes = [
  {
    path: '',
    component: CreatetodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatetodoPageRoutingModule {}
