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

        // load topics
        this.openddsBridge.data.Topic.map(topic => {
            topics.push({name: topic.topic_name, id: topic.topic_id});
        })

        // load pubs/writers
        this.openddsBridge.data.Publisher.map(pub => {
            publishers.push({writers: pub.writers});
        })

        // load subs/readers
        this.openddsBridge.data.Subscriber.map(sub => {
            subscribers.push({readers: sub.readers});
        })

        // determine connections
        for (let topic of topics) {

            // init conenctions
            topic.connections = [];

            // connect publishers
            for (let pub of publishers) {
                for (let writer of pub.writers) {
                    if (this.topicIdsAreEqual(topic.id, writer.topic_id))
                        topic.connections.push(pub);
                }
            }

            // connect subscribers
            for (let sub of subscribers) {
                for (let reader of sub.readers) {
                    if (this.topicIdsAreEqual(topic.id, reader.topic_id))
                        topic.connections.push(sub);
                }
            }
        }

        // generate elements
        const newNodes: GraphElement[] = [];
        const newPaths: Path[] = [];

        let xOffset = 0, yOffset = 0; // properly spaces elements on graph
        for (let topic of topics) {

            let topicX = 50 + xOffset * 250;
            let topicY = 50 + yOffset * 30;

            newNodes.push(new GraphElement(topic.name, topicX, topicY, 'topic'))

            for (let node of topic.connections) {

                let nodeX;
                let nodeY;

                // if subscriber
                if (node.readers) {
                    for (let reader of node.readers) {
                        nodeX = topicX + 30;
                        nodeY = topicY + 100;
                        newNodes.push(new GraphElement('Reader', nodeX, nodeY, 'reader'));
                        newPaths.push(new Path(topicX, topicY, nodeX, nodeY));
                    }
                }

                // if publisher
                else if (node.writers) {
                    for (let reader of node.writers) {
                        nodeX = topicX + 150;
                        nodeY = topicY + 150;
                        newNodes.push(new GraphElement('Writer', nodeX, nodeY, 'writer'));
                        newPaths.push(new Path(topicX + 20, topicY, nodeX, nodeY));
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

    topicIdsAreEqual(reader_topic_id, writer_topic_id): boolean {
        if (reader_topic_id.guidPrefix_0 === writer_topic_id.guidPrefix_0
            && reader_topic_id.guidPrefix_1 === writer_topic_id.guidPrefix_1
            && reader_topic_id.guidPrefix_2 === writer_topic_id.guidPrefix_2
            && reader_topic_id.guidPrefix_3 === writer_topic_id.guidPrefix_3
            && reader_topic_id.guidPrefix_4 === writer_topic_id.guidPrefix_4
            && reader_topic_id.guidPrefix_5 === writer_topic_id.guidPrefix_5)
                return true;
        else
            return false;

    }
}
