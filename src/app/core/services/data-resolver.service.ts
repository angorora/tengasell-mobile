import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs'
import { ParamsTempStoreService } from './params-temp-store.service'

@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<{ data: any }> {
  constructor(private paramsStoreService: ParamsTempStoreService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): { data: any } | Observable<{ data: any }> | Promise<{ data: any }> {
    console.dir('Resolved', this.paramsStoreService.getParams())
    return { data: this.paramsStoreService.getParams() }
  }
}
