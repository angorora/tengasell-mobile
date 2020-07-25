import { NumberFormatStyle } from '@angular/common'

export interface User {
  id?: number
  status?: boolean
  createdDate?: Date
  modifiedDate?: Date
  pin?: string
  username: string
  password?: string
  firstname: string
  lastname: string
  passwordStatus?: boolean
  accountStatus?: boolean
  email?: string
  phone?: string
  userType: string
  company: Company
}
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
