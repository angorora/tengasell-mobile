import { Component, OnInit } from '@angular/core'
import {
  Camera,
  CameraOptions,
  CameraResultType,
  CameraSource,
  Plugins,
} from '@capacitor/core'

import { CameraPreviewOptions } from '@capacitor-community/camera-preview'
import {
  Store,
  ofActionSuccessful,
  Actions,
  ofActionDispatched,
} from '@ngxs/store'
import { Logout, Login, LOGOUT } from 'src/app/store/auth/auth.actions'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  actionsUnsubscribe$: Subscription
  imageSrcData
  constructor(
    private store: Store,
    private menu: MenuController,
    private router: Router,
    private actions$: Actions
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
      resultType: CameraResultType.Base64,
      width: window.screen.width,
      height: window.screen.height * 0.8,
      source: CameraSource.Camera,
    }

    // start camera
    Plugins.Camera.getPhoto(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
    // this.cameraPreview.startCamera({
    //   x: 0,
    //   y: 50,
    //   width: window.screen.width,
    //   height: window.screen.height,
    //   camera: 'rear',
    //   tapPhoto: true,
    //   previewDrag: false,
    //   toBack: true,
    // })
  }
  // takePicture() {
  //   Plugins.Camera.capture({ quality: 85 }).then((base64PictureData) => {
  //     /*
  //     if the storeToFile option is false (the default), then base64PictureData is returned.
  //     base64PictureData is base64 encoded jpeg image. Use this data to store to a file or upload.
  //     Its up to the you to figure out the best way to save it to disk or whatever for your application.
  //   */

  //     /*
  //     if the storeToFile option is set to true, then a filePath is returned. Note that the file
  //     is stored in temporary storage, so you should move it to a permanent location if you
  //     don't want the OS to remove it arbitrarily.
  //   */

  //     // One simple example is if you are going to use it inside an HTML img src attribute then you would do the following:
  //     this.imageSrcData = 'data:image/jpeg;base64,' + base64PictureData
  //   })
  // }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
