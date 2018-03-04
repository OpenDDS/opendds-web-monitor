import { Component, OnInit, Input } from '@angular/core'
import { OpenDdsBridgeService } from '../opendds-bridge.service'
import { GridsterConfig, GridsterItem } from 'angular-gridster2'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [OpenDdsBridgeService]
})

export class HomepageComponent implements OnInit {

  openddsBridge
  dataKeys
  // defines the bridge for data between the service and the homepage
  constructor(openddsBridge: OpenDdsBridgeService) { 
    this.openddsBridge = openddsBridge;
    console.log('here2', this.openddsBridge)
  }

  options: GridsterConfig
  dashboard: Array<GridsterItem>
  // the array of gridster items that make up the grid is stored as an array
  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent)
  }
  
  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent)
  }

  ngOnInit() {
    setInterval(() => {
      this.initDashboard()
    }, 5000);
    this.dataKeys = Object.keys(this.openddsBridge.data);
    console.log('here3', this.dataKeys)

    this.options = {
      itemChangeCallback: HomepageComponent.itemChange,
      itemResizeCallback: HomepageComponent.itemResize,
    }

    this.dashboard = []
    // adds the ability to drag the tiles and expand them, however since for now we are going with 
    // resizeable down below this is not that useful, but if we change that its here
    this.options.draggable = {
      enabled: true
    }

    this.options.resizable = {
    enabled: true,
    }

    this.options.swap = true
    // calls the dashboard creation
    this.initDashboard()
  }

  changedOptions() {
    this.options.api.optionsChanged()
  }
  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1)
  }

  addItem(item: GridsterItem) { this.dashboard.push(item) }
  
  initDashboard() {
    // creates the specific tile for the data types and gives it the current values
    this.dashboard = [];
    let index = 0
    let gridsterItem: GridsterItem
    this.dataKeys = Object.keys(this.openddsBridge.data);
    this.dataKeys.forEach((key) => {
      this.dashboard.push({title: key, num: this.openddsBridge.data[key].length})
    })
    console.log('updated dashboard!')
  }
// unfortunately this is not a thing afaik due to the fact that once a gridster item is created it
// cannot be changed so either we need to go back to a standard angular grid or delete and rebuild the grid
// with hopefully the new current values but that seems really bad

}
