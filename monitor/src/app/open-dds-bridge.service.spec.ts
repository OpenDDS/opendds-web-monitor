import { TestBed, inject } from '@angular/core/testing'

import { OpenDdsBridgeService } from './open-dds-bridge.service'

fdescribe('OpenDdsBridgeService', inject([OpenDdsBridgeService], (OpenDdsBridgeService) => {
  let service
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenDdsBridgeService]
    })
  })

  it('should be created', () => {
    expect(OpenDdsBridgeService).toBeTruthy()
  })

  it('constructor', () => {
    OpenDdsBridgeService.getSocket = jasmine.createSpy('getSocket')
    OpenDdsBridgeService.getConnection = jasmine.createSpy('getConnection')

    service = new OpenDdsBridgeService()

    OpenDdsBridgeService.getSocket.should.haveBeenCalled()
    OpenDdsBridgeService.getConnection.should.haveBeenCalled()
  })
}))
