import { Component, OnInit } from '@angular/core'
import {
  Store,
  ofActionSuccessful,
  Actions,
  ofActionDispatched,
} from '@ngxs/store'
import { Logout, Login, LOGOUT } from 'src/app/store/auth/auth.actions'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'
import { ResetError } from 'src/app/store/error/error.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  actionsUnsubscribe$: Subscription
  constructor(
    private store: Store,
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
  logout() {
    this.store.dispatch(new Logout())
  }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
