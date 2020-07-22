import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string
  @Output()
  navBack = new EventEmitter<string>()
  constructor() {}

  ngOnInit() {}

  navigateBack() {
    this.navBack.emit('back')
  }
}
