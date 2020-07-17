import { Injectable } from '@angular/core'
import { State, Action, StateContext, Selector } from '@ngxs/store'
import { HTTPError } from './error.actions'
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
        return state.error.message
    }
    return state.error.name
  }
  @Action(HTTPError)
  serverError(stateContext: StateContext<HttpErrorModel>, action: HTTPError) {
    const state = stateContext.getState()
    stateContext.setState({
      ...state,
      ...action,
    })
  }
}
