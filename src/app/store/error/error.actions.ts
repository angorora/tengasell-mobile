import { State, Action } from '@ngxs/store'
import { HttpErrorResponse } from '@angular/common/http'
export const SERVER_ERROR = '[ERROR] HTTP Server Error'
export class HTTPError {
  static readonly type = SERVER_ERROR
  constructor(public error: HttpErrorResponse) {}
}
