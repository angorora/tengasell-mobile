import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { env } from 'process'
import { Observable } from 'rxjs'
import { jwt_decode } from 'jwt-decode'
import { Store } from '@ngxs/store'
import { AuthState } from 'src/app/store/auth/auth-state'
import { environment } from 'src/environments/environment'
import {
  mapUserToServer,
  mapUserFromServer,
} from 'src/app/request-mappers/user-mapper'
import { User } from 'src/app/models/user.model'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.baseURL
  applicationUID = '{4aecdd14-8a3f-4aa8-8adc-7b0b06355aaa}'
  constructor(private http: HttpClient, private store: Store) {}
  register(user: User): Observable<User> {
    const mappedUser = mapUserToServer(user)
    return this.http
      .post<User>(environment.baseURL, mappedUser)
      .pipe(tap((user) => mapUserFromServer(user)))
  }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}login`, {
      params: {
        username: username,
        password: password,
        applicationUID: this.applicationUID,
      },
    })
  }
}
