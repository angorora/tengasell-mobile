import { State, Selector, Action, StateContext, Store } from '@ngxs/store'
import { AuthStateModel } from '../../models/user.model'
import { AuthenticationService } from '../../core/services/authentication.service'
import { AuthActions, Login, Logout, ResetPassword } from './auth.actions'
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { ServerResponseModel } from 'src/app/models/server-response.model'
import { HTTPError, ApiError } from '../error/error.actions'
import { AppState } from '../app/app.state'
import { Router } from '@angular/router'
import { Navigate } from '@ngxs/router-plugin'
@State<AuthStateModel>({
  name: 'authState',
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

  constructor(
    private authService: AuthenticationService,
    private store: Store,
    private router: Router
  ) {}
  @Action(Login)
  getAuthToken(stateContext: StateContext<AuthStateModel>, action: Login) {
    const state = stateContext.getState()
    const previouslyNavigatedToUrl = this.store.selectSnapshot(
      AppState.navigatedUrl
    )
    return this.authService
      .login(action.payload.username, action.payload.password)
      .pipe(
        tap((response: ServerResponseModel) => {
          if (response.success) {
            stateContext.setState({
              ...state,
              username: action.payload.username,
              password: action.payload.password,
              token: response.responseBody,
            })
            return this.store.dispatch(new Navigate([previouslyNavigatedToUrl]))
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
      .resetPassword(action.payload.username, action.payload.password)
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
