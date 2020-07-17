import { User } from '../models/user.model'

export function mapUserFromServer(response): User {
  return {
    username: response.username,
    firstname: response.first_name,
    lastname: response.last_name,
    applicationUID: response.application_uid,
    company: {
      id: 159236191188139144,
      name: 'Tengasell',
      companyType: 'CUSTOMER',
    },
  }
}
export function mapUserToServer(user: User) {
  return {
    application_uid: user.applicationUID,
    belong_to: user.company.id,
    email: user.email,
    first_name: user.firstname,
    last_name: user.lastname,
    password: user.password,
    pin: user.pin,
    phone: user.phone,
    user_name_pin: user.pin,
    user_type: user.company.companyType,
    username: user.username,
  }
}
