import { State, Action, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { User } from 'src/app/models/user.model'
import { RegisterUser } from './user.actions'
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { switchMap, tap } from 'rxjs/operators'

@State<User>({
  name: 'user',
  defaults: {
    username: '',
    firstname: '',
    lastname: '',
    applicationUID: '{4aecdd14-8a3f-4aa8-8adc-7b0b06355aaa}',
    company: {
      id: 159236191188139144,
      name: 'Tengasell',
      companyType: 'CUSTOMER',
    },
  },
})
@Injectable()
export class UserState {
  constructor(private authService: AuthenticationService) {}
  @Action(RegisterUser)
  createUser(ctx: StateContext<User>, action: RegisterUser) {
    const state = ctx.getState()
    return this.authService
      .register({ ...state, ...action.payload })
      .pipe(tap((response) => ctx.setState({ ...state, ...response })))
  }
}
