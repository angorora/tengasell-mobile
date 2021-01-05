import { Injectable } from '@angular/core'
import { AuthState } from 'src/app/store/auth/auth-state'
import { Store } from '@ngxs/store'
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import * as jwt_decode from 'jwt-decode'
import { NavigatedRoute } from 'src/app/store/app/app.actions'
@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private store: Store, private router: Router) {}
  /* This route guard shields routes that can only beviewed by logged in users */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new NavigatedRoute(state.url))
    if (this.isTokenValid()) {
      return true
    } else {
      this.router.navigateByUrl('/login')
      return false
    }
  }

  getTokenExpirationDate(token): Date {
    const decoded = jwt_decode(token)
    if (decoded.exp === undefined) return null
    const date = new Date(decoded.exp * 1000) // seconds to milliseconds
    return date
  }

  isTokenValid(): boolean {
    const token = this.store.selectSnapshot<string>(AuthState.token)
    if (!token) return false
    const expiryDate = this.getTokenExpirationDate(token)
    if (expiryDate === undefined || !expiryDate) return false
    return expiryDate.valueOf() > new Date().valueOf()
  }
}
