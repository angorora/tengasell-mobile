import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationOnePage } from './registration-one.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationOnePageRoutingModule {}
