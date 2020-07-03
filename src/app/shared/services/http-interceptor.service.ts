import { Injectable } from '@angular/core'
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { Store } from '@ngxs/store'
import { AuthState } from 'src/app/store/auth/auth-state'

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private store: Store) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.store.selectSnapshot(AuthState.token)}`,
      },
    })
    return next.handle(req)
  }
}
