import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { Store } from '@ngxs/store'
import { AuthState } from 'src/app/store/auth/auth-state'
import { jwt_decode } from 'jwt-decode'
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router'
import { HTTPError } from 'src/app/store/error/error.actions'
@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private store: Store, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      })
    }
    if (!req.url.includes('login')) {
      this.addAuthTokenToHeaders(req)
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          this.router.navigateByUrl('/login')
        } else {
          return throwError(error)
        }
        return this.store.dispatch(new HTTPError(error))
      })
    )
  }
  private addAuthTokenToHeaders(req: HttpRequest<any>): HttpRequest<any> {
    let token = this.store.selectSnapshot<string>(AuthState.token)
    // If we dont have a token then we have nothing to add to the header
    if (!token) {
      return req
    }
    //TODO If you are calling an outside domain then do not add the token.

    return (req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    }))
  }
  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token)
    if (decoded.exp === undefined) return null
    const date = new Date(decoded.exp)
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
