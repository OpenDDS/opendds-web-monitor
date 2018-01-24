import { TestBed, inject } from '@angular/core/testing';

import { OpenDdsBridgeService } from './open-dds-bridge.service';

describe('OpenDdsBridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OpenDdsBridgeService]
    });
  });

  it('should be created', inject([OpenDdsBridgeService], (service: OpenDdsBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
