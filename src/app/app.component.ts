import { Component, OnInit } from '@angular/core'

import { MenuController, Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Router } from '@angular/router'
import {
  Actions,
  ofActionDispatched,
  ofActionSuccessful,
  Store,
} from '@ngxs/store'
import { Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { RouterNavigation } from '@ngxs/router-plugin'
import { AppState } from './store/app/app.state'
import { NavigatedRoute } from './store/app/app.actions'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  private destroy$ = new Subject<void>()

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router,
    private actions$: Actions,
    private store: Store
  ) {
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
  }

  ngOnInit() {
    this.actions$
      .pipe(ofActionDispatched(RouterNavigation), takeUntil(this.destroy$))
      .subscribe((action: RouterNavigation) => {
        console.dir(action.routerState.root.firstChild.url[0].path)
        if (action.routerState.root.firstChild.url[0].path !== 'login') {
          this.store.dispatch(
            new NavigatedRoute(action.routerState.root.url[0].path)
          )
        }
      })
  }

  closeMenu() {
    this.menu.close()
  }

  gotoHome() {
    this.router.navigateByUrl('/home')
    this.closeMenu()
  }
  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
