import { Component, OnInit } from '@angular/core';

import { GridsterConfig, GridsterItem }  from 'angular-gridster2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  title2 = [ "Number of Consumers", "Number of Producers","Number of Data Readers", "Number of Data Writers", "Number of Samples" ,
  "Number of Topics", "Largest Topic" , "Most Active Writer", "Number of total Writes"];
  value2 = [ "23", "234" , "234", "234", "234", "234", "234", "234", "234"];

  constructor() { }

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  

  static itemChange(item, itemComponent) {
     console.info('itemChanged', item, itemComponent);
   }
 
   static itemResize(item, itemComponent) {
     console.info('itemResized', item, itemComponent);
   }
 
   ngOnInit() {
     this.options = {
       itemChangeCallback: HomepageComponent.itemChange,
       itemResizeCallback: HomepageComponent.itemResize,
     };

     this.dashboard = [
       {cols: 2, rows: 1, y: 0, x: 0},
       {cols: 2, rows: 2, y: 0, x: 2}
     ];

     this.options.draggable = {
       enabled: true
       //start: this.removeItem,
       //stop: this.addItem
     }

     this.options.resizable = {
      enabled: true,
      //start: this.removeItem,
      //stop: this.addItem
    }
   }
 
   changedOptions() {
     this.options.api.optionsChanged();
   }
 
   removeItem(item) {
     this.dashboard.splice(this.dashboard.indexOf(item), 1);
   }
 
   addItem() {
     this.dashboard.push({});
   }

}
