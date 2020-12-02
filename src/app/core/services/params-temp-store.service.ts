import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ParamsTempStoreService {
  data = {}
  constructor() {}

  setParamsToTempStore(data) {
    this.data['params'] = data
  }

  getParams() {
    return this.data['params']
  }
}
