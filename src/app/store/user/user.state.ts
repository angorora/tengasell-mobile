import { State, Action, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import {
  UpdateCountryInfo,
  UpdatePersonalInfo,
  UpdateSecurityInfo,
  SaveUser,
} from './user.actions'
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { tap } from 'rxjs/operators'
import { patch } from '@ngxs/store/operators'
import { ResetError } from '../error/error.actions'
import { User } from 'src/app/models/user.model'

@State<User>({
  name: 'user',
  defaults: {
    company: {
      id: '159550767689447256',
      name: 'Tengasell',
      companyType: 'SELF',
    },
  },
})
@Injectable()
export class UserState {
  constructor(private authService: AuthenticationService) {}
  @Action(SaveUser)
  createUser(ctx: StateContext<User>, action: SaveUser) {
    const state = ctx.getState()
    ctx.dispatch(new ResetError())
    return this.authService
      .register({ ...state })
      .pipe(tap((response) => ctx.setState({ ...state, ...response })))
  }

  @Action(UpdateCountryInfo)
  updateCountryInfo(ctx: StateContext<User>, action: UpdateCountryInfo) {
    const state = ctx.getState()
    ctx.setState(
      patch({
        countryInfo: action.payload,
      })
    )
  }

  @Action(UpdatePersonalInfo)
  updatePersonalInfo(ctx: StateContext<User>, action: UpdatePersonalInfo) {
    const state = ctx.getState()
    ctx.setState(patch({ personalInfo: action.payload }))
  }

  @Action(UpdateSecurityInfo)
  updateSecurityInfo(ctx: StateContext<User>, action: UpdateSecurityInfo) {
    const state = ctx.getState()
    ctx.setState(patch({ securityInfo: action.payload }))
    return ctx.dispatch(new SaveUser())
  }
}
