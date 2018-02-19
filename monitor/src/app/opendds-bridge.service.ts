import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { map, catchError } from 'rxjs/operators'
import * as io from 'socket.io-client'
import {Socket} from './interfaces'
import config from '../../../eventConfig'
import _ from 'lodash'

const URL = 'http://localhost:8080'

const connectionsToCreate = _.map(config)

@Injectable()
export class OpenDdsBridgeService {
  private socket
  private connections

  data

  constructor() {
    this.data = {}
    this.connections = {}
    connectionsToCreate.forEach((item) => {
      this.data[item] = []
      this.connections[item] = this.getConnection(this.getSocket(item))
    })
  }

  getSocket (keyword) {
    return {
      observable: new Observable(observer => {
        this.socket = io(URL)
        this.socket.on(keyword, (data) => {
          console.log('event received')
          return observer.next(data)}
        )
        return () => this.socket.disconnect()
      }),
      keyword
    }
  }

  getConnection (socket) {
    return {
      socket: socket.observable,
      connection: socket.observable.subscribe(item => {
        this.data[socket.keyword].push(item)
        console.log('item', item)
      })
    }
  }
}
