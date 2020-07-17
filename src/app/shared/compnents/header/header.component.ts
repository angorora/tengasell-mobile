import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  navBack = new EventEmitter<string>()
  constructor() {}

  ngOnInit() {}

  navigateBack() {
    this.navBack.emit('back')
  }
}
