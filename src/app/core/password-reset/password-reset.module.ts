import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { PasswordResetPageRoutingModule } from './password-reset-routing.module'

import { PasswordResetPage } from './password-reset.page'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    PasswordResetPageRoutingModule,
  ],
  declarations: [PasswordResetPage],
})
export class PasswordResetPageModule {}
