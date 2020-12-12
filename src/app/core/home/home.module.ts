import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { IonicModule } from '@ionic/angular'

import { HomePageRoutingModule } from './home-routing.module'

import { HomePage } from './home.page'
import { SharedModule } from 'src/app/shared/shared.module'
import { SuperTabsContainer, SuperTabsModule } from '@ionic-super-tabs/angular'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    SharedModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
