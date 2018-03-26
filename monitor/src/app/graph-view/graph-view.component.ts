import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { OpenDdsBridgeService } from '../opendds-bridge.service'
import { GraphService } from './graph.service';
import eventTypes from '../../../../eventConfig.js';

import {GraphElement} from './models/GraphElement';
import {Path} from './models/Path';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css'],
  providers: [GraphService, OpenDdsBridgeService]
})
export class GraphViewComponent implements OnInit {

  openddsBridge: OpenDdsBridgeService;
  dataKeys: string[];
  graphService: GraphService;

  nodes: GraphElement[];
  paths: Path[];
  activeNode: GraphElement;

  constructor(graphService: GraphService, openddsBridge: OpenDdsBridgeService) { 
    this.openddsBridge = openddsBridge;
    this.graphService = graphService;
  }

  ngOnInit() {
    this.dataKeys = Object.keys(this.openddsBridge.data)
    /*
    setTimeout(() => {
      this.init()
    }, 2000);
    */
    // this.init();

    this.loadGraph();
  } 

  loadGraph() {
      const newNodes = [
          new GraphElement('T 1', 50, 50, 'topic'), 
          new GraphElement('R 1', 300, 300, 'reader'),
          new GraphElement('W 1', 400, 160, 'writer')
      ], 
      newPaths = [
          new Path(50, 50, 300, 300),
          new Path(50, 50, 400, 160)
      ];

      this.nodes = newNodes;
      this.paths = newPaths;
  }

  setActiveNode(node: GraphElement) {
    this.activeNode = node;
    console.log(this.activeNode);
  }
}