import { Injectable } from '@angular/core';
import { OpenDdsBridgeService } from './open-dds-bridge.service'
import _ from 'lodash'

@Injectable()
export class DataService {
  private openDdsBridge
  private connections

  topics

  constructor() {
    this.openDdsBridge = new OpenDdsBridgeService()
    
    this.topics = {
      observable: this.openDdsBridge.topicsObservable,
      data: []
    }

    this.connections = {
      
    }
  }

  destroy () {
    _.forEach(this.connections, (connection) => {
      connection.unsubscribe()
    })
  }
}
