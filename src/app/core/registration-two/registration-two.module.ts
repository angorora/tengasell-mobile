import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { RegistrationTwoPageRoutingModule } from './registration-two-routing.module'

import { RegistrationTwoPage } from './registration-two.page'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RegistrationTwoPageRoutingModule,
  ],
  declarations: [RegistrationTwoPage],
})
export class RegistrationTwoPageModule {}
