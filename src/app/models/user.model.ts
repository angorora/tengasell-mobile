import { NumberFormatStyle } from '@angular/common'

export interface User {
  id: number
  status: boolean
  created_date: Date
  modified_date: Date
  user_name_pin: string
  user_name: string
  first_name: string
  last_name: string
  password_status: boolean
  account_status: boolean
  email: string
  phone: string
  company: Company
}

export interface Company {
  companyType: string
  contactEmail: string
  contactNumber: string
  createdDate: Date
  description: string
  id: number
  modifiedDate: Date
  name: string
  physicalAddress: string
  status: string
  version: NumberFormatStyle
}
