import { Component, OnInit } from '@angular/core'
import _ from 'lodash'
import { OpenDdsBridgeService } from '../opendds-bridge.service'
import processes from './processes'

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})

export class ProcessListComponent implements OnInit {
  openddsBridge;
  JSON

  constructor(openddsBridge : OpenDdsBridgeService) {
    this.openddsBridge = openddsBridge
    this.JSON = JSON
  }

  ngOnInit() {
  }

  mapTopics (dp_id) {
    return _.filter(this.openddsBridge.data.Topic, (topic) => _.isEqual(dp_id, topic.dp_id))
  }

  mapPublishers (dp_id) {
    return _.filter(this.openddsBridge.data.Publisher, (publisher) => _.isEqual(dp_id, publisher.dp_id))
  }
  mapPublishersByTopic (dp_id, topic_id) {
    return _(this.openddsBridge.data.Publisher)
      .filter((publisher) => _.isEqual(dp_id, publisher.dp_id))
      .filter((publisher) => this.hasDataWritersForTopic(publisher, topic_id))
      .value()
  }

  hasDataWritersForTopic (publisher, topic_id) {
    return publisher.writers.some((writer) => _.isEqual(writer.topic_id, topic_id))
  }

  mapSubscriber (dp_id) {
    return _.filter(this.openddsBridge.data.Subscriber, (subscriber) => _.isEqual(dp_id, subscriber.dp_id))
  }

  mapSubscriberByTopic (dp_id, topic_id) { 
    return _(this.openddsBridge.data.Subscriber)
      .filter((subscriber) => _.isEqual(dp_id, subscriber.dp_id))
      .filter((subscriber) => this.hasDataReadersForTopic(subscriber, topic_id))
      .value()
  }

  hasDataReadersForTopic (subscriber, topic_id) {
    return subscriber.readers.some((reader) => _.isEqual(reader.topic_id, topic_id))
  }

  stringigyGUID ({guidPrefix_0, guidPrefix_1, guidPrefix_2, guidPrefix_3, guidPrefix_4, guidPrefix_5}) {
    return `[${[guidPrefix_0, guidPrefix_1, guidPrefix_2, guidPrefix_3, guidPrefix_4, guidPrefix_5].join(', ')}]`
  }
}
