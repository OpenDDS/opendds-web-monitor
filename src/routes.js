import Dashboard from "./Dashboard";
import DataWriterSection from "./DataWriterSection";
import DataReaderSection from "./DataReaderSection";
import TopicSection from "./TopicSection";
import PublisherSection from "./PublisherSection";
import SubscriberSection from "./SubscriberSection";
import ViewTopic from "./ViewTopic";
import ViewPublisher from "./ViewPublisher";
import ViewSubcriber from "./ViewSubcriber";
import ViewDataWriter from "./ViewDataWriter";

export const routes = [
  { path: '/', name:'dashboard', component: Dashboard},
  { path: '/topics', name:'allTopics', component: TopicSection},
  { path: '/topics/:topicId', name: 'viewTopic', component: ViewTopic},
  { path: '/publishers', name:'allPublishers', component: PublisherSection},
  { path: '/publishers/:publisherId', name: 'viewPublisher', component: ViewPublisher},
  { path: '/subscribers', name:'allSubscribers', component: SubscriberSection},
  { path: '/subscribers/:subscriberId', name: 'viewSubscriber', component: ViewSubcriber},
  { path: '/datawriters', name:'allDataWriters', component: DataWriterSection},
  { path: '/datawriters/:dataWriterId', name:'viewDataWriter', component: ViewDataWriter},
  { path: '/datareaders', name:'allDataReaders', component: DataReaderSection},
  { path: '*', component: { template: `<h1>Page Not Found</h1>`} }
];
