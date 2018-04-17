import { Component, OnInit, Input } from '@angular/core';
import { GraphElement } from '../graph-view/models/GraphElement';
import { GraphService } from '../graph-view/graph.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-graph-detials-box',
    templateUrl: './graph-detials-box.component.html',
    styleUrls: ['./graph-detials-box.component.css']
})
export class GraphDetialsBoxComponent implements OnInit {

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
