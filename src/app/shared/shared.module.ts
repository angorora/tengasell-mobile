import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { FooterBarComponent } from './components/footer-bar/footer-bar.component'

@NgModule({
  declarations: [HeaderComponent, FooterBarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterBarComponent],
})
export class SharedModule {}
