import { Injectable } from "@angular/core";
import { OpenDdsBridgeService } from "../opendds-bridge.service";
import { GraphElement } from './models/GraphElement';
import { Path } from './models/Path';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GraphService {

    nodes: Subject<GraphElement[]> = new Subject<GraphElement[]>();
    paths: Subject<Path[]> = new Subject<Path[]>();
    activeNode: Subject<GraphElement> = new Subject<GraphElement>();

    dataKeys: string[];

    constructor(private openddsBridge: OpenDdsBridgeService) { 
        this.dataKeys = Object.keys(this.openddsBridge.data);
    }

    loadGraph() {

        //TODO reimplement with openddsBridge integration
        const newNodes: GraphElement[] = [
            new GraphElement('T 1', 50, 50, 'topic'), 
            new GraphElement('R 1', 300, 300, 'reader'),
            new GraphElement('W 1', 400, 160, 'writer')
        ], 
        newPaths: Path[] = [
            new Path(50, 50, 300, 300),
            new Path(50, 50, 400, 160)
        ];

        this.nodes.next(newNodes);
        this.paths.next(newPaths);
    }

    getNodes(): Observable<GraphElement[]> {
        return this.nodes.asObservable();
    }

    getPaths(): Observable<Path[]> {
        return this.paths.asObservable();
    }

    setActiveNode(node: GraphElement): void {
        this.activeNode.next(node);
    }

    getActiveNode(): Observable<GraphElement> {
        return this.activeNode.asObservable();
    }
}