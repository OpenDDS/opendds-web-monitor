import { Component, OnInit, Input } from '@angular/core'
import { OpenDdsBridgeService } from '../opendds-bridge.service'
//import { GridsterConfig, GridsterItem } from 'angular-gridster2'

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
  this.initDashboard()
  this.dataKeys = Object.keys(this.openddsBridge.data);
  this.dashboard = []
  }

  addItem(item) { this.dashboard.push(item) }
  //   // adds the ability to drag the tiles and expand them, however since for now we are going with 
  //   // resizeable down below this is not that useful, but if we change that its here

  initDashboard(){ 
    this.dataKeys = Object.keys(this.openddsBridge.data);
    this.dataKeys.forEach((key) => {
    this.dashboard[key]({title: key, num: this.openddsBridge.data[key].length})
    })
    console.log('updated dashboard!')
  }
}
