import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss'],
})
export class ProductListItemComponent implements OnInit {
  @Input()
  itemPrice:number
  @Input()
  itemPicture
  @Input()
  itemTitle
  @Output()
  itemLike = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {}

}
