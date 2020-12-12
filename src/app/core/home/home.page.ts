import { Component, OnInit } from '@angular/core'
import {
  Camera,
  CameraOptions,
  CameraResultType,
  CameraSource,
  Plugins,
} from '@capacitor/core'

import { Store, Actions, ofActionDispatched } from '@ngxs/store'
import { Logout } from 'src/app/store/auth/auth.actions'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular'
import { ParamsTempStoreService } from '../../core/services/params-temp-store.service'
import {
  ProductDisplayFilter,
  PRODUCTS_MOCK,
  PRODUCT_FILTER_MOCKS,
} from 'src/app/models/product.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  actionsUnsubscribe$: Subscription
  displayFilters = PRODUCT_FILTER_MOCKS
  constructor(
    private store: Store,
    private menu: MenuController,
    private router: Router,
    private actions$: Actions,
    private paramsStore: ParamsTempStoreService
  ) {}

  ngOnInit() {
    this.actionsUnsubscribe$ = this.actions$
      .pipe(ofActionDispatched(Logout))
      .subscribe((action) => {
        console.dir(action)
        return this.router.navigateByUrl('/login')
      })
  }
  openMenu() {
    this.menu.open()
  }
  startCamera() {
    const cameraPreviewOpts: CameraOptions = {
      resultType: CameraResultType.Uri,
      width: window.screen.width,
      height: window.screen.height,
      source: CameraSource.Prompt,
      saveToGallery: true,
    }

    // start camera
    Plugins.Camera.getPhoto(cameraPreviewOpts).then(
      (res) => {
        const data = { imageUrl: res.webPath }
        console.dir(data)
        this.paramsStore.setParamsToTempStore(data)
        this.router.navigateByUrl(`/create-listing/${{ data }}`)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  trackByFn(index: number, filter: ProductDisplayFilter) {
    return filter.filterId
  }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
