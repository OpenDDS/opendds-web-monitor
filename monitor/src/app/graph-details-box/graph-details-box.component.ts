import { Component, OnInit, Input } from '@angular/core';
import { GraphElement } from '../graph-view/models/GraphElement';
import { GraphService } from '../graph-view/graph.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-graph-details-box',
    templateUrl: './graph-details-box.component.html',
    styleUrls: ['./graph-details-box.component.css']
})
export class GraphDetailsBoxComponent implements OnInit {

    activeNode: GraphElement;

    // activeNodeSub: Subscription;

    constructor(private graphService: GraphService) {}

    ngOnInit() {
        this.graphService.getActiveNode().subscribe(activeNode => { this.activeNode = activeNode; });
    }

    typeStyle(type) {
        // console.log(type);
        switch (type) {
            case 'topic':
                return 'green';
            case 'reader':
                return 'blue';
            case 'writer':
                return 'red';
            default:
                return 'black';
        }
    }

}
