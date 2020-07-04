import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { env } from 'process'
import { Observable } from 'rxjs'
import { jwt_decode } from 'jwt-decode'
import { Store } from '@ngxs/store'
import { AuthState } from 'src/app/store/auth/auth-state'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.baseURL
  applicationUID = '{4aecdd14-8a3f-4aa8-8adc-7b0b06355aaa}'
  constructor(private http: HttpClient, private store: Store) {}

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
