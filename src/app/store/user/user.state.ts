import { State, Action, StateContext } from '@ngxs/store'
import { Injectable } from '@angular/core'
import { User } from 'src/app/models/user.model'
import { RegisterUser } from './user.actions'
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { switchMap, tap } from 'rxjs/operators'
import { ResetError } from '../error/error.actions'

@State<User>({
  name: 'user',
  defaults: {
    username: '',
    firstname: '',
    lastname: '',
    userType: 'USER',
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
  @Action(RegisterUser)
  createUser(ctx: StateContext<User>, action: RegisterUser) {
    const state = ctx.getState()
    ctx.dispatch(new ResetError())
    return this.authService
      .register({ ...state, ...action.payload })
      .pipe(tap((response) => ctx.setState({ ...state, ...response })))
  }
}
