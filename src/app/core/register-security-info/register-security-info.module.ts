import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { RegisterSecurityInfoPageRoutingModule } from './register-security-info-routing.module'

import { RegisterSecurityInfoPage } from './register-security-info.page'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegisterSecurityInfoPageRoutingModule,
    SharedModule,
  ],
  declarations: [RegisterSecurityInfoPage],
})
export class RegisterSecurityInfoPageModule {}
