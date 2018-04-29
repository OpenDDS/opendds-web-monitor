// written by Matt Blough

import { Component, OnInit, Input } from '@angular/core'
import { OpenDdsBridgeService } from '../opendds-bridge.service'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  openddsBridge: OpenDdsBridgeService
  dataKeys: string[]
  // defines the bridge for data between the service and the homepage
  constructor(openddsBridge: OpenDdsBridgeService) {
    this.openddsBridge = openddsBridge;
  }
  dashboard
  // // the array of gridster items that make up the grid is stored as an array

  ngOnInit() {
  this.dashboard = []
  this.initDashboard()
  this.dataKeys = Object.keys(this.openddsBridge.data);
  console.log(this.dataKeys)
  console.log(this.dashboard)
  }

  initDashboard(){
    this.dataKeys = Object.keys(this.openddsBridge.data);
    this.dataKeys.forEach((key) => {
    this.dashboard.push({title: key, num: this.openddsBridge.data[key].length})
    })
    console.log('updated dashboard!')
  }
}
