import { Injectable } from '@angular/core'
// import * as opendds from 'opendds'

@Injectable()
export class OpenDdsBridgeService {
  factory: any
  library: any
  participant: any
  constructor() { }

  // public initDDS(argsArray: any): void {
  //   this.factory = opendds.initialize()
  //   this.library = opendds.load()
  //   this.participant = this.factory.create_participant(23)
  // }
}
