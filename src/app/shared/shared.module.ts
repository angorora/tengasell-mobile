import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { FooterBarComponent } from './components/footer-bar/footer-bar.component'
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component'

@NgModule({
  declarations: [HeaderComponent, FooterBarComponent,ProductListItemComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterBarComponent,ProductListItemComponent],
})
export class SharedModule {}
