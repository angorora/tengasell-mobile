import { User } from '../models/user.model'

export function mapUserFromServer(response): User {
  return {
    personalInfo: mapPersonalInfo(response),
    securityInfo: mapSecurityInfo(response),
    countryInfo: mapCountryInfo(response),
    company: {
      id: '159550767689447256',
      name: 'Tengasell',
      companyType: 'SELF',
    },
  }
}
export function mapUserToServer(user: User) {
  return {
    belong_to: user.company.id,
    email: user.personalInfo.email,
    first_name: user.personalInfo.firstname,
    last_name: user.personalInfo.lastname,
    phone_country_code: user.countryInfo.telPrefix,
    password: user.securityInfo.password,
    phone: user.personalInfo.phone,
    username: user.securityInfo.username,
    user_type: user.personalInfo.userType,
  }
}
function mapPersonalInfo(response) {
  return {
    firstname: response.first_name,
    lastname: response.last_name,
    email: response.email,
    phone: response.phone,
    userType: response.user_type,
  }
}
function mapSecurityInfo(response) {
  return {
    username: response.user_name,
  }
}

function mapCountryInfo(response) {
  return {
    telPrefix: response.phone_country_code,
  }
}
function mapDeviceInfo(response) {
  return {
    imei: response.imei,
  }
}
