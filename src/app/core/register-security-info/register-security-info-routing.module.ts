import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSecurityInfoPage } from './register-security-info.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterSecurityInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterSecurityInfoPageRoutingModule {}
