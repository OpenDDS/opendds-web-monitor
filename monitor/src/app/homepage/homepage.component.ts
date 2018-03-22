import { Component, OnInit, Input } from '@angular/core'
import { OpenDdsBridgeService } from '../opendds-bridge.service'
//import { GridsterConfig, GridsterItem } from 'angular-gridster2'
//import * as d3 from 'd3'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [OpenDdsBridgeService]
})

 export class HomepageComponent{
  /*title2 = [ 'Number of Publishers', 'Number of Subscribers', 'Number of Data Readers', 'Number of Data Writers', 'Number of Samples',
  'Number of Topics', 'Largest Topic' , 'Most Active Writer', 'Number of total Writes']
  // value2 = [ '23', '234' , '234', '234', '234', '234', '234', '234', '234']
  numPub = 23
  numSub = 23
  numDR = 23
  numDW = 23
  numSamples = 23
  numTopics = 234
  largestTopic = 234
  mostActiveWriter = 234
  totalWrites = 234
  // totalVals = 9

  constructor() { }

  options: GridsterConfig
  dashboard: Array<GridsterItem>

  static itemChange(item, itemComponent) {
     console.info('itemChanged', item, itemComponent)
   }
   static itemResize(item, itemComponent) {
     console.info('itemResized', item, itemComponent)
   }
   ngOnInit() {
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
   /*
   addItem() {
     this.dashboard.push({})
   }

   */
   //initDashboard() {
     // get data
     //let myGirdsterItem: GridsterItem // turn into gridster item
     //this.addItem( myGirdsterItem )
     //this.dashboard.push()
   //} */
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
