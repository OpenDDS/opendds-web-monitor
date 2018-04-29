// OpenDDS Bridge Service: supplies the connections to the opendds node module over socket.io
// Author: Alexander Hammonds

import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { map, catchError } from 'rxjs/operators'
import * as io from 'socket.io-client'
import { Socket } from './interfaces'
import config from '../../../eventConfig'
import _ from 'lodash'
import { ModuleWithProviders } from '@angular/compiler/src/core'
import dummyData from './dummy-data.json'
import { environment } from '../environments/environment'

const URL = 'http://localhost:8081'

const connectionsToCreate = _.map(config)

@Injectable()
export class OpenDdsBridgeService {
  private socket
  private connections

  // data accesed like so: 'data.subscriber', where 'subscriber' is whatever you want to query
  data

  constructor() {
    this.data = {}
    this.connections = {}
    if (environment.fakeData) {
      _.forEach(dummyData, (item, key) => {
        this.data[key] = [item]
      })
    } else {
      connectionsToCreate.forEach((item) => {
        this.data[item] = []
        this.connections[item] = this.getConnection(item)
      })
    }
  }

  // The socket is wrapped in an observable because it takes care of auto updating when new data comes in on the socket
  getSocket (keyword) {
    return {
      observable: new Observable(observer => {
        this.socket = io(URL)
        // This is where the socket 'events' are handled
        this.socket.on(keyword, (data) => {
          return observer.next(data)}
        )
        return () => this.socket.disconnect()
      }),
      keyword
    }
  }

  getConnection (item) {
    const socket = this.getSocket(item)
    return {
      socket: socket.observable,
      connection: socket.observable.subscribe(data => {
        // This is where the data is put inside the this.data holder.
        this.data[socket.keyword].push(data)
        console.log(`${socket.keyword}`, {data})
      })
    }
  }
}
