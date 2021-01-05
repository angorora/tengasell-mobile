import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.page.html',
  styleUrls: ['./create-listing.page.scss'],
})
export class CreateListingPage implements OnInit {
  navSubscription$: Subscription
  imageData: unknown
  constructor(private router: ActivatedRoute) {
    this.imageData = this.router.snapshot.data['data'].data.imageUrl
    console.dir(this.imageData['data'])
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.navSubscription$.unsubscribe()
  }
}
