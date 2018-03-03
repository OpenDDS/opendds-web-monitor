import { Component, OnInit } from '@angular/core'
import processes from './processes'
import { OpenDdsBridgeService } from '../opendds-bridge.service'

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})

export class ProcessListComponent implements OnInit {
  openddsBridge

  constructor(openddsBridge : OpenDdsBridgeService) {
    this.openddsBridge = openddsBridge
    console.log('here', openddsBridge)
  }

  ngOnInit() {
  }
}
