import { AuthStateModel } from 'src/app/models/user.model'

export const LOGIN = '[AUTH] Login action'
export const LOGOUT = '[AUTH] Logout action'
export const RESET_PASSWORD = '[AUTH] Reset password'

export class Login {
  static readonly type = LOGIN
  constructor(public payload: { username: string; password: string }) {}
}

export class ResetPassword {
  static readonly type = RESET_PASSWORD
  constructor(public payload: { username: string; password: string }) {}
}
export class Logout {
  static readonly type = LOGOUT
}
export type AuthActions = Login | Logout | ResetPassword
