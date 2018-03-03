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
  openddsBridge

  constructor(openddsBridge : OpenDdsBridgeService) {
    this.openddsBridge = openddsBridge
    console.log('here', openddsBridge)
  }

  ngOnInit() {
  }

  mapTopics (guid) {
    return _.map(this.openddsBridge.topics, (topic) => _.isEqual(guid, topic.dp_id))
  }

  mapPublishers (guid) {
    return _.map(this.openddsBridge.publishers, (publisher) => _.isEqual(guid, publisher.dp_id))
  }

  mapSubscriber (guid) {
    return _.map(this.openddsBridge.subscribers, (subscriber) => _.isEqual(guid, subscriber.dp_id))
  }
}
