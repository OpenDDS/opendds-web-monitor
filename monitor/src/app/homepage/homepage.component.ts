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

  openddsBridge: OpenDdsBridgeService;
  dataKeys: string[];
  
  title2 = [ 'Number of Publishers', 'Number of Subscribers', 'Number of Data Readers', 'Number of Data Writers', 'Number of Samples',
  'Number of Topics', 'Largest Topic' , 'Most Active Writer', 'Number of total Writes']

  constructor(openddsBridge: OpenDdsBridgeService) { 
    this.openddsBridge = openddsBridge;
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

     this.options = {
       itemChangeCallback: HomepageComponent.itemChange,
       itemResizeCallback: HomepageComponent.itemResize,
     }

     this.dashboard = [
       {cols: 2, rows: 1, y: 0, x: 0},
       {cols: 2, rows: 2, y: 0, x: 2}
       
     ]

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
    let gridsterItem: GridsterItem
    for (let key in this.dataKeys){
      gridsterItem.title = key
      gridsterItem.num = this.openddsBridge.data[key].length
      this.dashboard.push(gridsterItem)
    }
   }
  // d3 test implementation
  // tempData: number[] = [30, 86, 168, 281, 303, 365];

  /* d3.select(".chart")
    .selectAll("div")
    .data(tempData)
      .enter()
      .append("div")
      .style("width", function(d) { return d + "px"; })
      .text(function(d) { return d; }); */
}
