import { Component, OnInit } from '@angular/core'
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions,
} from '@ionic-native/camera-preview/ngx'
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
  providers: [CameraPreview],
})
export class HomePage implements OnInit {
  actionsUnsubscribe$: Subscription
  imageSrcData
  constructor(
    private store: Store,
    private menu: MenuController,
    private router: Router,
    private actions$: Actions,
    private cameraPreview: CameraPreview
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
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: 600,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1,
    }

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
  }
  takePicture() {
    this.cameraPreview
      .takePicture({ width: 640, height: 600, quality: 85 })
      .then((base64PictureData) => {
        /*
      if the storeToFile option is false (the default), then base64PictureData is returned.
      base64PictureData is base64 encoded jpeg image. Use this data to store to a file or upload.
      Its up to the you to figure out the best way to save it to disk or whatever for your application.
    */

        /*
      if the storeToFile option is set to true, then a filePath is returned. Note that the file
      is stored in temporary storage, so you should move it to a permanent location if you
      don't want the OS to remove it arbitrarily.
    */

        // One simple example is if you are going to use it inside an HTML img src attribute then you would do the following:
        this.imageSrcData = 'data:image/jpeg;base64,' + base64PictureData
      })
  }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
