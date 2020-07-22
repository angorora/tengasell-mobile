import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
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
import { ServerResponseModel } from 'src/app/models/server-response.model'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.baseURL

  constructor(private http: HttpClient, private store: Store) {}
  register(user: User): Observable<User> {
    const mappedUser = mapUserToServer(user)
    return this.http
      .post<User>(`${this.baseUrl}users`, mappedUser)
      .pipe(tap((user) => mapUserFromServer(user)))
  }

  login(
    username: string,
    password: string,
    applicationUID: string
  ): Observable<ServerResponseModel> {
    let headers_object = new HttpHeaders()
    headers_object = headers_object.set(
      'Authorization',
      'Basic ' + btoa('pinda:Password@2019')
    )
    headers_object = headers_object.set('Content-Type', 'application/json')
    const httpOptions = {
      headers: headers_object,
    }
    return this.http.post<ServerResponseModel>(
      `${this.baseUrl}login`,
      {
        username: username,
        password: password,
        applicationUID: applicationUID,
      },
      httpOptions
    )
  }

  resetPassword(
    username: string,
    password: string,
    applicationUID: string
  ): any {
    let headers_object = new HttpHeaders()
    headers_object = headers_object.set(
      'Authorization',
      'Basic cGluZGE6UGFzc3dvcmRAMjAxOQ=='
    )

    headers_object = headers_object.set('Content-Type', 'application/json')
    const httpOptions = {
      headers: headers_object,
    }
    return this.http.post(
      `${this.baseUrl}users/password-reset/`,
      {
        username: username,
        password: password,
        application_uid: applicationUID,
      },
      httpOptions
    )
  }
}
