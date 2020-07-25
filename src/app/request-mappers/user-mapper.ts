import { User } from '../models/user.model'

export function mapUserFromServer(response): User {
  return {
    username: response.username,
    firstname: response.first_name,
    lastname: response.last_name,
    userType: response.user_type,
    company: {
      id: '159236191188139144',
      name: 'Tengasell',
      companyType: 'CUSTOMER',
    },
  }
}
export function mapUserToServer(user: User) {
  return {
    belong_to: user.company.id,
    email: user.email,
    first_name: user.firstname,
    last_name: user.lastname,
    password: user.password,
    pin: user.pin,
    phone: user.phone,
    user_name_pin: user.pin,
    user_type: user.userType,
    username: user.username,
  }
}
