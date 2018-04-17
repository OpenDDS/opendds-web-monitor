import { Component, OnInit } from '@angular/core';
import { OpenDdsBridgeService } from '../opendds-bridge.service'
import { GraphService } from './graph.service';
import eventTypes from '../../../../eventConfig.js';

import {GraphElement} from './models/GraphElement';
import {Path} from './models/Path';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.css'],
  providers: [GraphService]
})
export class GraphViewComponent implements OnInit {

  nodes: GraphElement[];
  paths: Path[];

  nodesSub: Subscription;
  pathsSub: Subscription;

  constructor(private graphService: GraphService) {}

  ngOnInit() {
    this.graphService.getNodes().subscribe(nodes => { this.nodes = nodes; console.log(nodes); });
    this.graphService.getPaths().subscribe(paths => { this.paths = paths; console.log(paths); });
    this.graphService.loadGraph();
  }

  setActiveNode(node: GraphElement): void {
    this.graphService.setActiveNode(node);
  }
}