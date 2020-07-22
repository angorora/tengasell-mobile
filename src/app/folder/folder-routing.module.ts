import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FolderPage } from './folder.page'
import { AuthGuardService } from '../shared/services/auth-guard.service'

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: FolderPage,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
