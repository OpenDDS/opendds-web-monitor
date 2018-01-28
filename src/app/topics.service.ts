import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';
import {Socket} from './interfaces'

declare var io : {
  connect(url: string): Socket;
};

@Injectable()
export class TopicsService {
  socket: Socket;
  all: any

  constructor() {
    this.socket = socketIo('http://localhost:8080');

    this.all = {}

    this.socket.on('topic', (res) => {
      console.log(res.data)
      this.all.data = res.data
    });
  }
}
