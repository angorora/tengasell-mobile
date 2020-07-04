import { State, Selector, Action, StateContext } from '@ngxs/store'
import { AuthStateModel } from '../../models/user.model'
import { AuthenticationService } from '../../shared/services/authentication.service'
import { AuthActions, Login, Logout } from './auth.actions'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
@State<AuthStateModel>({
  name: 'authState',
})
@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel) {
    return state.token
  }

  constructor(private authService: AuthenticationService) {}
  @Action(Login)
  getAuthToken(stateContext: StateContext<AuthStateModel>, action: Login) {
    const state = stateContext.getState()
    return this.authService
      .login(action.payload.username, action.payload.password)
      .pipe(
        tap((token) => {
          stateContext.setState({
            ...state,
            username: action.payload.username,
            password: action.payload.password,
            token: token,
          })
        })
      )
  }
  // @Action(Logout)
  // logout(stateContext: StateContext<AuthStateModel>) {
  //   const state = stateContext.getState()
  //   stateContext.setState({})
  // }
}
