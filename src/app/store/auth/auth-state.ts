import { State, Selector, Action, StateContext } from '@ngxs/store'
import { AuthStateModel } from '../../models/user.model'
import { AuthenticationService } from '../../shared/services/authentication.service'
import { AuthActions, Login, Logout, ResetPassword } from './auth.actions'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { ServerResponseModel } from 'src/app/models/server-response.model'
import { HTTPError, ApiError } from '../error/error.actions'
@State<AuthStateModel>({
  name: 'authState',
  defaults: {
    applicationUID: '{4aecdd14-8a3f-4aa8-8adc-7b0b06355aaa}',
  },
})
@Injectable()
export class AuthState {
  @Selector()
  static token(state: AuthStateModel) {
    return state?.token
  }
  @Selector()
  static username(state: AuthStateModel) {
    return state?.username
  }

  @Selector()
  static password(state: AuthStateModel) {
    return state?.password
  }

  constructor(private authService: AuthenticationService) {}
  @Action(Login)
  getAuthToken(stateContext: StateContext<AuthStateModel>, action: Login) {
    const state = stateContext.getState()
    return this.authService
      .login(
        action.payload.username,
        action.payload.password,
        state.applicationUID
      )
      .pipe(
        tap((response: ServerResponseModel) => {
          if (response.success) {
            stateContext.setState({
              ...state,
              username: action.payload.username,
              password: action.payload.password,
              token: response.responseBody,
            })
          } else {
            stateContext.dispatch(
              new ApiError({ status: 200, message: response.message })
            )
          }
        })
      )
  }
  @Action(ResetPassword)
  resetPassword(
    stateContext: StateContext<AuthStateModel>,
    action: ResetPassword
  ) {
    const state = stateContext.getState()
    return this.authService
      .resetPassword(
        action.payload.username,
        action.payload.password,
        state.applicationUID
      )
      .pipe(
        tap((token) => {
          stateContext.setState({
            ...state,
            username: action.payload.username,
            password: action.payload.password,
          })
        })
      )
  }
  @Action(Logout)
  logout(stateContext: StateContext<AuthStateModel>) {
    const state = stateContext.getState()
    stateContext.setState({ ...state, token: '' })
  }
}
