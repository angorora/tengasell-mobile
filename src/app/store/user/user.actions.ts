import {
  CountryInfo,
  PersonalInfo,
  SecurityInfo,
} from 'src/app/models/user.model'

export const SAVE_USER = '[USER] Save User'
export const UPDATE_COUNTRY_INFO = '[USER] Update Country Info'
export const UPDATE_PERSONAL_INFO = '[USER] Update Personal Info'
export const UPDATE_SECURITY_INFO = '[USER] Update Security Info'
export class SaveUser {
  static readonly type = SAVE_USER
}
export class UpdateCountryInfo {
  static readonly type = UPDATE_COUNTRY_INFO
  constructor(public payload: CountryInfo) {}
}
export class UpdatePersonalInfo {
  static readonly type = UPDATE_PERSONAL_INFO
  constructor(public payload: PersonalInfo) {}
}
export class UpdateSecurityInfo {
  static readonly type = UPDATE_SECURITY_INFO
  constructor(public payload: SecurityInfo) {}
}
