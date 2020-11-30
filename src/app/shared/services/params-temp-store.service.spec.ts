import { TestBed } from '@angular/core/testing'

import { ParamsTempStoreService } from './params-temp-store.service'

describe('ParamsTempStoreService', () => {
  let service: ParamsTempStoreService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ParamsTempStoreService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
