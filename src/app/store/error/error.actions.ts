import { State, Action } from '@ngxs/store'
import { HttpErrorResponse } from '@angular/common/http'
export const SERVER_ERROR = '[ERROR] HTTP Server Error'
export const API_ERROR = '[ERROR] HTTP API Error'
export class HTTPError {
  static readonly type = SERVER_ERROR
  constructor(public error: HttpErrorResponse) {}
}
export class ApiError {
  static readonly type = SERVER_ERROR
  constructor(public error: { message: string }) {}
}
