import { Injectable } from '@angular/core'
import { AuthState } from 'src/app/store/auth/auth-state'
import { Store } from '@ngxs/store'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private store: Store, private router: Router) {}
  /* This route guard shields routes that can only beviewed by logged in users */
  canActivate() {
    if (!!this.store.selectSnapshot(AuthState.token)) {
      return true
    } else {
      this.router.navigateByUrl('/home')
      return false
    }
  }
}
