import { Injectable } from '@angular/core'
import { State, Action, StateContext, Selector } from '@ngxs/store'
import { HTTPError, ApiError } from './error.actions'
import { HttpErrorModel } from 'src/app/models/http-error.model'

@State<HttpErrorModel>({
  name: 'errors',
})
@Injectable()
export class ErrorState {
  @Selector()
  static errorMessage(state: HttpErrorModel) {
    switch (state.error.status) {
      case 401:
        return 'Either username or password is incorrect'
      default:
        return 'An Error Occured on the server'
    }
    return state.error.name
  }
  @Selector()
  static apiErrorMessage(state: HttpErrorModel) {
    return state.message
  }

  @Action(HTTPError)
  serverError(stateContext: StateContext<HttpErrorModel>, action: HTTPError) {
    const state = stateContext.getState()
    stateContext.setState({
      ...state,
      ...action,
    })
  }
  @Action(ApiError)
  apiError(stateContext: StateContext<HttpErrorModel>, action: ApiError) {
    const state = stateContext.getState()
    stateContext.setState({
      ...state,
      ...action,
    })
  }
}
