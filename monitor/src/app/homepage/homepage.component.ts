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
  
  constructor(openddsBridge: OpenDdsBridgeService) { 
    this.openddsBridge = openddsBridge;
    console.log('here2', this.openddsBridge)
  }

  options: GridsterConfig
  dashboard: Array<GridsterItem>

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent)
  }
  
  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent)
  }

  ngOnInit() {
    this.dataKeys = Object.keys(this.openddsBridge.data);
    console.log('here3', this.dataKeys)

    this.options = {
      itemChangeCallback: HomepageComponent.itemChange,
      itemResizeCallback: HomepageComponent.itemResize,
    }

    this.dashboard = []

    this.options.draggable = {
      enabled: true
      // start: this.removeItem,
      // stop: this.addItem
    }

    this.options.resizable = {
    enabled: true,
    // start: this.removeItem,
    // stop: this.addItem
    }

    this.options.swap = true
    
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
    // get data
    //let myGirdsterItem: GridsterItem // turn into gridster item
    //this.addItem( myGirdsterItem )
    let index = 0
    let gridsterItem: GridsterItem
    this.dataKeys.forEach((key) => {
      this.dashboard.push({title: key, num: this.openddsBridge.data[key].length})
    })
  }
}
