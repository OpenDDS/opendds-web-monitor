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

        let topics = [], subscribers = [], publishers = [];

        console.log(this.openddsBridge.data.publisher);

        // load topics
        this.openddsBridge.data.topic.map(topic => {
            topics.push({name: topic.name, id: topic.topic_id});
        })

        // load pubs/writers
        this.openddsBridge.data.publisher.map(pub => {
            publishers.push({topic_id: pub.topic_id, writers: pub.writers});
        })

        // load subs/readers
        this.openddsBridge.data.subscriber.map(sub => {
            subscribers.push({topic_id: sub.topic_id, writers: sub.readers});
        })

        // determine connections
        for (let topic of topics) {

            // init conenctions
            topic.connections = [];

            // connect publishers
            for (let pub of publishers) {
                if (topic.id === pub.topic_id)
                    topic.connections.push(pub);
            }

            // connect subscribers
            for (let sub of subscribers) {
                if (topic.id === sub.topic_id)
                topic.connections.push(sub);
            }
        }

        // generate elements
        const newNodes: GraphElement[] = [];
        const newPaths: Path[] = [];

        let xOffset = 0, yOffset = 0; // properly spaces elements on graph
        for (let topic of topics) {

            let topicX = xOffset * 10;
            let topicY = 100;

            newNodes.push(new GraphElement(topic.name, xOffset * 100, 100, 'topic'))

            for (let node of topic.conenctions) {

                let nodeX = xOffset * 90;
                let nodeY = 150;

                // if subscriber
                if (node.readers) {
                    for (let reader of node.readers) {
                        newNodes.push(new GraphElement('Reader', xOffset * 90, 150, 'reader'));
                        newPaths.push(new Path(topicX, topicY, nodeX, nodeY));
                    }
                }

                // if publisher
                else if (node.writers) {
                    for (let reader of node.readers) {
                        newNodes.push(new GraphElement('Reader', xOffset * 90, 150, 'reader'));
                        newPaths.push(new Path(topicX, topicY, nodeX, nodeY));
                    }
                }

            }

            // update offsets
            xOffset++;
            yOffset++;
        }

        // push nodes
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