import { User } from 'src/app/models/user.model'

export const LOGIN = '[USER] Register User'
export class RegisterUser {
  static readonly type = LOGIN
  constructor(public payload: User) {}
}
