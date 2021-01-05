import { NumberFormatStyle } from '@angular/common'
import { UpdateCountryInfo } from '../store/user/user.actions'
import { Country } from './country.model'

export interface User {
  id?: number
  status?: boolean
  createdDate?: Date
  modifiedDate?: Date
  personalInfo?: PersonalInfo
  securityInfo?: SecurityInfo
  countryInfo?: CountryInfo
  deviceInfo?: DeviceInfo
  passwordStatus?: boolean
  accountStatus?: boolean
  company: Company
}
export interface PersonalInfo {
  firstname: string
  lastname: string
  email: string
  phone: string
  userType: string
}
export interface SecurityInfo {
  username: string
  password?: string
  passwordStatus?: boolean
  accountStatus?: boolean
}
export interface DeviceInfo {
  imei?: string
}
export interface CountryInfo extends Country {}
export interface AuthStateModel {
  username?: string
  password?: string
  token?: string
}
export interface Company {
  companyType: string
  contactEmail?: string
  contactNumber?: string
  createdDate?: Date
  description?: string
  id: string
  modifiedDate?: Date
  name: string
  physicalAddress?: string
  status?: string
  version?: NumberFormatStyle
}
