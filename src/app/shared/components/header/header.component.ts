import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core'
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string
  @Input()
  showBack: boolean
  @Output()
  navBack = new EventEmitter<string>()
  constructor(private menu: MenuController) {}

  ngOnInit() {}

  navigateBack() {
    this.navBack.emit('back')
  }
  openMenu() {
    this.menu.enable(true, 'custom')
    this.menu.open('custom')
  }
}
