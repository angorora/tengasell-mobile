import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { env } from 'process'
import { Observable } from 'rxjs'
import { jwt_decode } from 'jwt-decode'
import { Store } from '@ngxs/store'
import { AuthState } from 'src/app/store/auth/auth-state'

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = env.baseUrl
  constructor(private http: HttpClient, private store: Store) {}

  login(username: string, password: string): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/login`, {
      params: { username: username, password: password },
    })
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token)

    if (decoded.exp === undefined) return null

    const date = new Date(decoded.exp)
    //date.setUTCSeconds(decoded.exp);
    return date
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.store.selectSnapshot<string>(AuthState.token)
    if (!token) return true

    const date = this.getTokenExpirationDate(token)
    if (date === undefined) return false
    return !(date.valueOf() > new Date().valueOf())
  }
}
