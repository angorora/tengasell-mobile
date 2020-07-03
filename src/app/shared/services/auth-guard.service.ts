import { Injectable } from '@angular/core'
import { AuthState } from 'src/app/store/auth/auth-state'
import { Store } from '@ngxs/store'

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private store: Store) {}

  canActivate() {
    return !!this.store.selectSnapshot(AuthState.token)
  }
}
