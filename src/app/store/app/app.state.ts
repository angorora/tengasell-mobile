import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { patch } from '@ngxs/store/operators'

import { NavigatedRoute } from './app.actions'

export interface AppStateModel {
  navigatedUrl: string
}
@State<AppStateModel>({
  name: 'appState',
})
@Injectable({ providedIn: 'root' })
export class AppState {
  @Selector()
  static navigatedUrl(state: AppStateModel) {
    return state.navigatedUrl
  }
  @Action(NavigatedRoute)
  function(ctx: StateContext<AppStateModel>, action: NavigatedRoute) {
    const state = ctx.getState()
    return ctx.setState(
      patch({
        navigatedUrl: action.url,
      })
    )
  }
}
