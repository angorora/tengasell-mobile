import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { RegistrationOnePageRoutingModule } from './registration-one-routing.module'

import { RegistrationOnePage } from './registration-one.page'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    RegistrationOnePageRoutingModule,
  ],
  declarations: [RegistrationOnePage],
})
export class RegistrationOnePageModule {}
